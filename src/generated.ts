import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CCIPxERC20Bridge
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const cciPxErc20BridgeAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_router', internalType: 'address', type: 'address' },
      { name: '_link', internalType: 'address', type: 'address' },
      { name: '_feeBps', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_chainSelector', internalType: 'uint64', type: 'uint64' },
      { name: '_bridge', internalType: 'address', type: 'address' },
    ],
    name: 'addBridgeForChain',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_chainId', internalType: 'uint32', type: 'uint32' },
      { name: '_chainSelector', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'addChainIdToChainSelector',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_xerc20', internalType: 'contract IXERC20', type: 'address' },
      { name: '_erc20', internalType: 'contract IERC20', type: 'address' },
      {
        name: '_lockbox',
        internalType: 'contract IXERC20Lockbox',
        type: 'address',
      },
    ],
    name: 'addXERC20Config',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_chainSelector', internalType: 'uint64', type: 'uint64' },
      { name: '_xerc20remote', internalType: 'address', type: 'address' },
      { name: '_xerc20local', internalType: 'address', type: 'address' },
    ],
    name: 'addXERC20ForOriginChain',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_xerc20', internalType: 'address', type: 'address' },
      { name: '_destinationChainId', internalType: 'uint32', type: 'uint32' },
      { name: '_receipient', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'bridgeTokens',
    outputs: [{ name: 'messageId', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_xerc20', internalType: 'address', type: 'address' },
      { name: '_destinationChainId', internalType: 'uint32', type: 'uint32' },
      { name: '_receipient', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'bridgeTokensWithLINK',
    outputs: [{ name: 'messageId', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    name: 'bridgesByChain',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'message',
        internalType: 'struct Client.Any2EVMMessage',
        type: 'tuple',
        components: [
          { name: 'messageId', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'sourceChainSelector',
            internalType: 'uint64',
            type: 'uint64',
          },
          { name: 'sender', internalType: 'bytes', type: 'bytes' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          {
            name: 'destTokenAmounts',
            internalType: 'struct Client.EVMTokenAmount[]',
            type: 'tuple[]',
            components: [
              { name: 'token', internalType: 'address', type: 'address' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'ccipReceive',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    name: 'chainIdToChainSelector',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeBps',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_xerc20', internalType: 'address', type: 'address' },
      { name: '_destinationChainId', internalType: 'uint32', type: 'uint32' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_feeInLINK', internalType: 'bool', type: 'bool' },
    ],
    name: 'getFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastReceivedMessageDetails',
    outputs: [
      { name: 'messageId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'text', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRouter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'linkToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_feeBps', internalType: 'uint256', type: 'uint256' }],
    name: 'setFeeBps',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_beneficiary', internalType: 'address', type: 'address' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_beneficiary', internalType: 'address', type: 'address' },
      { name: '_token', internalType: 'address', type: 'address' },
    ],
    name: 'withdrawToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'contract IXERC20', type: 'address' }],
    name: 'xerc20s',
    outputs: [
      { name: 'erc20', internalType: 'contract IERC20', type: 'address' },
      {
        name: 'lockbox',
        internalType: 'contract IXERC20Lockbox',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint64', type: 'uint64' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'xerc20sByChain',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'messageId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'sourceChainSelector',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'MessageReceived',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'messageId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'destinationChainSelector',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'feeToken',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'fees',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MessageSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'FailedToWithdrawEth',
  },
  {
    type: 'error',
    inputs: [{ name: 'router', internalType: 'address', type: 'address' }],
    name: 'InvalidRouter',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'destinationChainSelector',
        internalType: 'uint64',
        type: 'uint64',
      },
    ],
    name: 'NoReceiverForDestinationChain',
  },
  {
    type: 'error',
    inputs: [
      { name: 'currentBalance', internalType: 'uint256', type: 'uint256' },
      { name: 'calculatedFees', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'NotEnoughBalance',
  },
  { type: 'error', inputs: [], name: 'NothingToWithdraw' },
  {
    type: 'error',
    inputs: [
      { name: 'sourceChainSelector', internalType: 'uint64', type: 'uint64' },
      { name: 'sender', internalType: 'address', type: 'address' },
    ],
    name: 'SenderNotAllowlistedBySourceChain',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const cciPxErc20BridgeAddress = {
  1: '0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1',
  8453: '0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const cciPxErc20BridgeConfig = {
  address: cciPxErc20BridgeAddress,
  abi: cciPxErc20BridgeAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FlokiFork
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const flokiForkAbi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const flokiForkAddress = {
  1: '0x7D225c4cc612E61d26523B099b0718d03152eDEf',
  8453: '0x6e05b1c7F694Fc383067164a33573b05Ba0500e8',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const flokiForkConfig = {
  address: flokiForkAddress,
  abi: flokiForkAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// XERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const xerc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const xerc20Address = {
  1: '0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0',
  8453: '0x6e05b1c7F694Fc383067164a33573b05Ba0500e8',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const xerc20Config = { address: xerc20Address, abi: xerc20Abi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20Bridge = /*#__PURE__*/ createUseReadContract({
  abi: cciPxErc20BridgeAbi,
  address: cciPxErc20BridgeAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"bridgesByChain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeBridgesByChain =
  /*#__PURE__*/ createUseReadContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'bridgesByChain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"chainIdToChainSelector"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeChainIdToChainSelector =
  /*#__PURE__*/ createUseReadContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'chainIdToChainSelector',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"feeBps"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeFeeBps =
  /*#__PURE__*/ createUseReadContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'feeBps',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"getFee"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeGetFee =
  /*#__PURE__*/ createUseReadContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'getFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"getLastReceivedMessageDetails"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeGetLastReceivedMessageDetails =
  /*#__PURE__*/ createUseReadContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'getLastReceivedMessageDetails',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"getRouter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeGetRouter =
  /*#__PURE__*/ createUseReadContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'getRouter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"linkToken"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeLinkToken =
  /*#__PURE__*/ createUseReadContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'linkToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeOwner = /*#__PURE__*/ createUseReadContract(
  {
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'owner',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"xerc20s"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeXerc20s =
  /*#__PURE__*/ createUseReadContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'xerc20s',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"xerc20sByChain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useReadCciPxErc20BridgeXerc20sByChain =
  /*#__PURE__*/ createUseReadContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'xerc20sByChain',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20Bridge = /*#__PURE__*/ createUseWriteContract({
  abi: cciPxErc20BridgeAbi,
  address: cciPxErc20BridgeAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"addBridgeForChain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeAddBridgeForChain =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'addBridgeForChain',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"addChainIdToChainSelector"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeAddChainIdToChainSelector =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'addChainIdToChainSelector',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"addXERC20Config"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeAddXerc20Config =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'addXERC20Config',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"addXERC20ForOriginChain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeAddXerc20ForOriginChain =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'addXERC20ForOriginChain',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"bridgeTokens"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeBridgeTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'bridgeTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"bridgeTokensWithLINK"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeBridgeTokensWithLink =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'bridgeTokensWithLINK',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"ccipReceive"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeCcipReceive =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'ccipReceive',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"setFeeBps"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeSetFeeBps =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'setFeeBps',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"withdrawToken"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWriteCciPxErc20BridgeWithdrawToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'withdrawToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20Bridge =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"addBridgeForChain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeAddBridgeForChain =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'addBridgeForChain',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"addChainIdToChainSelector"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeAddChainIdToChainSelector =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'addChainIdToChainSelector',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"addXERC20Config"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeAddXerc20Config =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'addXERC20Config',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"addXERC20ForOriginChain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeAddXerc20ForOriginChain =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'addXERC20ForOriginChain',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"bridgeTokens"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeBridgeTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'bridgeTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"bridgeTokensWithLINK"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeBridgeTokensWithLink =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'bridgeTokensWithLINK',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"ccipReceive"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeCcipReceive =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'ccipReceive',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"setFeeBps"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeSetFeeBps =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'setFeeBps',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `functionName` set to `"withdrawToken"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useSimulateCciPxErc20BridgeWithdrawToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    functionName: 'withdrawToken',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWatchCciPxErc20BridgeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `eventName` set to `"MessageReceived"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWatchCciPxErc20BridgeMessageReceivedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    eventName: 'MessageReceived',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `eventName` set to `"MessageSent"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWatchCciPxErc20BridgeMessageSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    eventName: 'MessageSent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWatchCciPxErc20BridgeOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link cciPxErc20BridgeAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x77680848810fA3410983abDC5FbF23Ee3cF9E3f1)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x740De8fE9D75F5eD5585C1e8e5Fd6971844B5689)
 */
export const useWatchCciPxErc20BridgeOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: cciPxErc20BridgeAbi,
    address: cciPxErc20BridgeAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flokiForkAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadFlokiFork = /*#__PURE__*/ createUseReadContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadFlokiForkAllowance = /*#__PURE__*/ createUseReadContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadFlokiForkBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadFlokiForkDecimals = /*#__PURE__*/ createUseReadContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadFlokiForkName = /*#__PURE__*/ createUseReadContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadFlokiForkSymbol = /*#__PURE__*/ createUseReadContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadFlokiForkTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flokiForkAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWriteFlokiFork = /*#__PURE__*/ createUseWriteContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWriteFlokiForkApprove = /*#__PURE__*/ createUseWriteContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWriteFlokiForkTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWriteFlokiForkTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: flokiForkAbi,
    address: flokiForkAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flokiForkAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useSimulateFlokiFork = /*#__PURE__*/ createUseSimulateContract({
  abi: flokiForkAbi,
  address: flokiForkAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useSimulateFlokiForkApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flokiForkAbi,
    address: flokiForkAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useSimulateFlokiForkTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flokiForkAbi,
    address: flokiForkAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link flokiForkAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useSimulateFlokiForkTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: flokiForkAbi,
    address: flokiForkAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flokiForkAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWatchFlokiForkEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: flokiForkAbi, address: flokiForkAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flokiForkAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWatchFlokiForkApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flokiForkAbi,
    address: flokiForkAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link flokiForkAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x7D225c4cc612E61d26523B099b0718d03152eDEf)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWatchFlokiForkTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: flokiForkAbi,
    address: flokiForkAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link xerc20Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadXerc20 = /*#__PURE__*/ createUseReadContract({
  abi: xerc20Abi,
  address: xerc20Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadXerc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: xerc20Abi,
  address: xerc20Address,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadXerc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: xerc20Abi,
  address: xerc20Address,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadXerc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: xerc20Abi,
  address: xerc20Address,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadXerc20Name = /*#__PURE__*/ createUseReadContract({
  abi: xerc20Abi,
  address: xerc20Address,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadXerc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: xerc20Abi,
  address: xerc20Address,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useReadXerc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: xerc20Abi,
  address: xerc20Address,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link xerc20Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWriteXerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: xerc20Abi,
  address: xerc20Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWriteXerc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: xerc20Abi,
  address: xerc20Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWriteXerc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: xerc20Abi,
  address: xerc20Address,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWriteXerc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: xerc20Abi,
  address: xerc20Address,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link xerc20Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useSimulateXerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: xerc20Abi,
  address: xerc20Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useSimulateXerc20Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: xerc20Abi, address: xerc20Address, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useSimulateXerc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: xerc20Abi,
    address: xerc20Address,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link xerc20Abi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useSimulateXerc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: xerc20Abi,
    address: xerc20Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link xerc20Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWatchXerc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: xerc20Abi,
  address: xerc20Address,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link xerc20Abi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWatchXerc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: xerc20Abi,
    address: xerc20Address,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link xerc20Abi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x81A3D0677aEf7FF6fbF40e874dDD5E8A94B77ca0)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x6e05b1c7F694Fc383067164a33573b05Ba0500e8)
 */
export const useWatchXerc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: xerc20Abi,
    address: xerc20Address,
    eventName: 'Transfer',
  })
