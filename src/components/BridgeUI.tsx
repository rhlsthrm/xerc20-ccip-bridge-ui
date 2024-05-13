import {
  Card,
  CardContent,
  Typography,
  Stack,
  Select,
  Chip,
  FormControl,
  Input,
  Button,
  FormHelperText,
  CardActions,
  Option,
  IconButton,
  CircularProgress,
} from "@mui/joy";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { formatEther, parseEther } from "viem";
import { base, mainnet } from "viem/chains";
import {
  useChainId,
  usePublicClient,
  useSwitchChain,
  useWalletClient,
} from "wagmi";
import {
  cciPxErc20BridgeAddress,
  useReadCciPxErc20BridgeGetFee,
  useReadFlokiForkAllowance,
  useReadFlokiForkBalanceOf,
  useWriteCciPxErc20BridgeBridgeTokens,
  useWriteFlokiForkApprove,
  xerc20Address,
} from "../generated";

type Chain = {
  id: number;
  name: string;
  color: string;
};
const chains: Chain[] = [
  { id: mainnet.id, name: mainnet.name, color: "danger" },
  { id: base.id, name: "Base", color: "primary" },
];

const Chain = ({
  selectedChain,
  source,
}: {
  selectedChain: number;
  source: boolean;
}) => (
  <Chip
    variant="soft"
    color={
      `${chains.find((c) => (source ? selectedChain === c.id : selectedChain !== c.id))?.color}` as any
    }
    sx={{ width: 150 }}
  >
    {
      chains.find((c) =>
        source ? selectedChain === c.id : selectedChain !== c.id
      )?.name
    }
  </Chip>
);

export const BridgeUI = () => {
  const { switchChain } = useSwitchChain();
  const [selectedChain, setSelectedChain] = useState<number>(mainnet.id);
  const [destinationChain, setDestinationChain] = useState<number>(base.id);
  const chainId = useChainId();
  const { data: client } = useWalletClient();
  const publicClient = usePublicClient();
  const [amount, setAmount] = useState("0");
  const [bridging, setBridging] = useState(false);
  const [approving, setApproving] = useState(false);
  const [txHash, setTxHash] = useState<string>();
  const { data: allowance, refetch: refetchAllowance } =
    useReadFlokiForkAllowance({
      args: client?.account?.address
        ? [client?.account?.address, cciPxErc20BridgeAddress[selectedChain]]
        : undefined,
      query: {
        enabled: !!client?.account?.address,
        refetchInterval: 5000,
        refetchIntervalInBackground: true,
      },
    });
  const { writeContractAsync: bridgeTokens } =
    useWriteCciPxErc20BridgeBridgeTokens();
  const { writeContractAsync: approve } = useWriteFlokiForkApprove();
  const { data: fee } = useReadCciPxErc20BridgeGetFee({
    args: [
      xerc20Address[selectedChain],
      destinationChain,
      parseEther(amount),
      false,
    ],
    query: {
      enabled: !!client?.account?.address && parseEther(amount) > 0n,
      refetchInterval: 5000,
      refetchIntervalInBackground: true,
    },
  });
  let { data: balance } = useReadFlokiForkBalanceOf({
    args: client?.account?.address ? [client?.account?.address] : undefined,
    query: {
      enabled: !!client?.account?.address,
      refetchInterval: 5000,
      refetchIntervalInBackground: true,
    },
  });
  if (!balance) {
    balance = 0n;
  }

  useEffect(() => {
    if (chainId !== selectedChain) {
      switchChain({ chainId: selectedChain });
    }
    setDestinationChain(
      chains.find((c) => c.id !== selectedChain)?.id ?? base.id
    );
  }, [chainId, selectedChain, switchChain]);

  const handleBridge = async () => {
    setBridging(true);
    try {
      const tx = await bridgeTokens({
        args: [
          xerc20Address[selectedChain],
          destinationChain,
          client!.account!.address,
          parseEther(amount),
        ],
        value: fee,
      });
      console.log("tx: ", tx);
      const res = await publicClient?.waitForTransactionReceipt({ hash: tx });
      console.log("res: ", res);
      setTxHash(tx);
    } catch (e) {
      console.error(e);
      setTxHash(undefined);
    }
    setBridging(false);
  };

  const handleApprove = async () => {
    setApproving(true);
    try {
      const tx = await approve({
        args: [cciPxErc20BridgeAddress[selectedChain], parseEther(amount)],
      });
      console.log("tx: ", tx);
      const res = await publicClient?.waitForTransactionReceipt({ hash: tx });
      console.log("res: ", res);
      await refetchAllowance();
    } catch (e) {
      console.error(e);
    }
    setApproving(false);
  };

  return (
    <Card size="lg">
      {txHash ? (
        <BridgeProgress hash={txHash} setTxHash={setTxHash} />
      ) : (
        <>
          <CardContent>
            <Typography level="title-md" paddingBottom={2}>
              Bridge Tokens
            </Typography>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
            >
              <Select defaultValue="fork">
                <Option value="fork">FLOKI FORK</Option>
              </Select>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Chain selectedChain={selectedChain} source={true} />
                <IconButton
                  variant="plain"
                  onClick={() =>
                    setSelectedChain(
                      chains.find((c) => c.id !== selectedChain)?.id ??
                        mainnet.id
                    )
                  }
                >
                  <IoArrowForward />
                </IconButton>
                <Chain selectedChain={selectedChain} source={false} />
              </Stack>
              <FormControl>
                <Input
                  endDecorator={
                    <Button
                      variant="soft"
                      color="neutral"
                      onClick={() => setAmount(formatEther(balance))}
                    >
                      MAX
                    </Button>
                  }
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/^0+/, ""))}
                />
                <FormHelperText>Balance: {formatEther(balance)}</FormHelperText>
              </FormControl>
              <Typography level="body-sm">
                Fee: <br />
                {formatEther(fee ?? 0n)} ETH (CCIP Fee) + <br />
                {(Number(amount) * 10) / 10000} FORK (Bridge Fee)
              </Typography>
            </Stack>
          </CardContent>
          <CardActions>
            {allowance && allowance < parseEther(amount) ? (
              <Button
                variant="solid"
                color="primary"
                onClick={handleApprove}
                loading={approving}
              >
                Approve
              </Button>
            ) : (
              <Button
                variant="solid"
                color="primary"
                onClick={handleBridge}
                loading={bridging}
              >
                Bridge
              </Button>
            )}
          </CardActions>
        </>
      )}
    </Card>
  );
};

const BridgeProgress = ({
  hash,
  setTxHash,
}: {
  hash: string;
  setTxHash: Dispatch<SetStateAction<string | undefined>>;
}) => {
  return (
    <CardContent>
      <CircularProgress
        color="success"
        determinate={false}
        size="lg"
        variant="soft"
      />
      <Typography level="title-md" paddingTop={2}>
        Bridging Tokens
      </Typography>
      <Typography level="body-sm" paddingTop={2}>
        Your tokens are bridging! Bridging could take up to 15 minutes, <br />
        use the following link to follow the progress.
      </Typography>
      <a href="https://ccip.chain.link/" target="_blank" rel="noreferrer">
        CCIP Explorer
      </a>
      <Typography level="body-sm" paddingTop={2}>
        Copy and paste your tx hash into the search bar:
      </Typography>
      <Typography level="body-lg" paddingTop={2}>
        {hash}
      </Typography>
      <CardActions>
        <Button
          variant="solid"
          color="primary"
          onClick={() => setTxHash(undefined)}
        >
          Back
        </Button>
      </CardActions>
    </CardContent>
  );
};
