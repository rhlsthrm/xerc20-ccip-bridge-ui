import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { erc20Abi } from "viem";
import { base, mainnet } from "wagmi/chains";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      abi: [
        {
          type: "constructor",
          inputs: [
            { name: "_router", type: "address", internalType: "address" },
            { name: "_link", type: "address", internalType: "address" },
            { name: "_feeBps", type: "uint256", internalType: "uint256" },
          ],
          stateMutability: "nonpayable",
        },
        { type: "receive", stateMutability: "payable" },
        {
          type: "function",
          name: "acceptOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addBridgeForChain",
          inputs: [
            {
              name: "_chainSelector",
              type: "uint64",
              internalType: "uint64",
            },
            { name: "_bridge", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addChainIdToChainSelector",
          inputs: [
            { name: "_chainId", type: "uint32", internalType: "uint32" },
            { name: "_chainSelector", type: "uint64", internalType: "uint64" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addXERC20Config",
          inputs: [
            {
              name: "_xerc20",
              type: "address",
              internalType: "contract IXERC20",
            },
            {
              name: "_erc20",
              type: "address",
              internalType: "contract IERC20",
            },
            {
              name: "_lockbox",
              type: "address",
              internalType: "contract IXERC20Lockbox",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addXERC20ForOriginChain",
          inputs: [
            {
              name: "_chainSelector",
              type: "uint64",
              internalType: "uint64",
            },
            {
              name: "_xerc20remote",
              type: "address",
              internalType: "address",
            },
            { name: "_xerc20local", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "bridgeTokens",
          inputs: [
            { name: "_xerc20", type: "address", internalType: "address" },
            {
              name: "_destinationChainId",
              type: "uint32",
              internalType: "uint32",
            },
            { name: "_receipient", type: "address", internalType: "address" },
            { name: "_amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [
            { name: "messageId", type: "bytes32", internalType: "bytes32" },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "bridgeTokensWithLINK",
          inputs: [
            { name: "_xerc20", type: "address", internalType: "address" },
            {
              name: "_destinationChainId",
              type: "uint32",
              internalType: "uint32",
            },
            { name: "_receipient", type: "address", internalType: "address" },
            { name: "_amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [
            { name: "messageId", type: "bytes32", internalType: "bytes32" },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "bridgesByChain",
          inputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ccipReceive",
          inputs: [
            {
              name: "message",
              type: "tuple",
              internalType: "struct Client.Any2EVMMessage",
              components: [
                {
                  name: "messageId",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "sourceChainSelector",
                  type: "uint64",
                  internalType: "uint64",
                },
                { name: "sender", type: "bytes", internalType: "bytes" },
                { name: "data", type: "bytes", internalType: "bytes" },
                {
                  name: "destTokenAmounts",
                  type: "tuple[]",
                  internalType: "struct Client.EVMTokenAmount[]",
                  components: [
                    {
                      name: "token",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "amount",
                      type: "uint256",
                      internalType: "uint256",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "chainIdToChainSelector",
          inputs: [{ name: "", type: "uint32", internalType: "uint32" }],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "feeBps",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFee",
          inputs: [
            { name: "_xerc20", type: "address", internalType: "address" },
            {
              name: "_destinationChainId",
              type: "uint32",
              internalType: "uint32",
            },
            { name: "_amount", type: "uint256", internalType: "uint256" },
            { name: "_feeInLINK", type: "bool", internalType: "bool" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getLastReceivedMessageDetails",
          inputs: [],
          outputs: [
            { name: "messageId", type: "bytes32", internalType: "bytes32" },
            { name: "text", type: "string", internalType: "string" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRouter",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "linkToken",
          inputs: [],
          outputs: [
            { name: "", type: "address", internalType: "contract IERC20" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setFeeBps",
          inputs: [
            { name: "_feeBps", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            { name: "interfaceId", type: "bytes4", internalType: "bytes4" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [{ name: "to", type: "address", internalType: "address" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [
            { name: "_beneficiary", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "withdrawToken",
          inputs: [
            {
              name: "_beneficiary",
              type: "address",
              internalType: "address",
            },
            { name: "_token", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "xerc20s",
          inputs: [
            { name: "", type: "address", internalType: "contract IXERC20" },
          ],
          outputs: [
            {
              name: "erc20",
              type: "address",
              internalType: "contract IERC20",
            },
            {
              name: "lockbox",
              type: "address",
              internalType: "contract IXERC20Lockbox",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "xerc20sByChain",
          inputs: [
            { name: "", type: "uint64", internalType: "uint64" },
            { name: "", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "MessageReceived",
          inputs: [
            {
              name: "messageId",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "sourceChainSelector",
              type: "uint64",
              indexed: true,
              internalType: "uint64",
            },
            {
              name: "sender",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "recipient",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "MessageSent",
          inputs: [
            {
              name: "messageId",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "destinationChainSelector",
              type: "uint64",
              indexed: true,
              internalType: "uint64",
            },
            {
              name: "receiver",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "recipient",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "feeToken",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "fees",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferRequested",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "FailedToWithdrawEth",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "target", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "InvalidRouter",
          inputs: [
            { name: "router", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "NoReceiverForDestinationChain",
          inputs: [
            {
              name: "destinationChainSelector",
              type: "uint64",
              internalType: "uint64",
            },
          ],
        },
        {
          type: "error",
          name: "NotEnoughBalance",
          inputs: [
            {
              name: "currentBalance",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "calculatedFees",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        { type: "error", name: "NothingToWithdraw", inputs: [] },
        {
          type: "error",
          name: "SenderNotAllowlistedBySourceChain",
          inputs: [
            {
              name: "sourceChainSelector",
              type: "uint64",
              internalType: "uint64",
            },
            { name: "sender", type: "address", internalType: "address" },
          ],
        },
      ],
      name: "CCIPxERC20Bridge",
      address: {
        [mainnet.id]: "0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1",
        [base.id]: "0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689",
      },
    },
    {
      abi: erc20Abi,
      name: "FlokiFork",
      address: {
        [mainnet.id]: "0x7D225c4cc612E61d26523B099b0718d03152eDEf",
        [base.id]: "0x6e05b1c7F694Fc383067164a33573b05Ba0500e8",
      },
    },
    {
      abi: erc20Abi,
      name: "XERC20",
      address: {
        [mainnet.id]: "0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0",
        [base.id]: "0x6e05b1c7F694Fc383067164a33573b05Ba0500e8",
      },
    },
  ],
  plugins: [react()],
});
