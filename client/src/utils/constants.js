const contractDetails = {
  _format: "hh-sol-artifact-1",
  contractName: "Lottery",
  sourceName: "contracts/Lottery.sol",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "NewPlayer",
      type: "event",
    },
    {
      inputs: [],
      name: "enterLottery",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "getBalance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getPlayerList",
      outputs: [
        {
          internalType: "address payable[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getRandomNumber",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "getWinnerByLotteryId",
      outputs: [
        {
          internalType: "address payable",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "lotteryHistory",
      outputs: [
        {
          internalType: "address payable",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "lotteryId",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600281905550610ace806100686000396000f3fe6080604052600436106100705760003560e01c8063992f7db31161004e578063992f7db314610108578063c1af578514610145578063dbdff2c11461014f578063e580f47b1461017a57610070565b806312065fe01461007557806362a63e29146100a05780636d6fe230146100cb575b600080fd5b34801561008157600080fd5b5061008a6101a5565b6040516100979190610689565b60405180910390f35b3480156100ac57600080fd5b506100b56101ad565b6040516100c29190610794565b60405180910390f35b3480156100d757600080fd5b506100f260048036038101906100ed91906107e7565b61023b565b6040516100ff9190610823565b60405180910390f35b34801561011457600080fd5b5061012f600480360381019061012a91906107e7565b61026e565b60405161013c9190610823565b60405180910390f35b61014d6102ab565b005b34801561015b57600080fd5b506101646103c1565b6040516101719190610689565b60405180910390f35b34801561018657600080fd5b5061018f610415565b60405161019c9190610689565b60405180910390f35b600047905090565b6060600180548060200260200160405190810160405280929190818152602001828054801561023157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101e7575b5050505050905090565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b67016345785d8a00003410156102f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ed9061089b565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506706f05b59d3b2000047106103715761037061041b565b5b3373ffffffffffffffffffffffffffffffffffffffff167f6b8fe0f067804a78a12efa88b8428446c8d8a703d5604dffc63ac27fcbdcfd0d346040516103b79190610689565b60405180910390a2565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040516020016103f7929190610936565b6040516020818303038152906040528051906020012060001c905090565b60025481565b600060018054905061042b6103c1565b6104359190610991565b90506001818154811061044b5761044a6109c2565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156104bb573d6000803e3d6000fd5b50600181815481106104d0576104cf6109c2565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660036000600254815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506002600081548092919061056190610a20565b9190505550600067ffffffffffffffff81111561058157610580610a69565b5b6040519080825280602002602001820160405280156105af5781602001602082028036833780820191505090505b50600190805190602001906105c59291906105c9565b5050565b828054828255906000526020600020908101928215610642579160200282015b828111156106415782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906105e9565b5b50905061064f9190610653565b5090565b5b8082111561066c576000816000905550600101610654565b5090565b6000819050919050565b61068381610670565b82525050565b600060208201905061069e600083018461067a565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106fb826106d0565b9050919050565b61070b816106f0565b82525050565b600061071d8383610702565b60208301905092915050565b6000602082019050919050565b6000610741826106a4565b61074b81856106af565b9350610756836106c0565b8060005b8381101561078757815161076e8882610711565b975061077983610729565b92505060018101905061075a565b5085935050505092915050565b600060208201905081810360008301526107ae8184610736565b905092915050565b600080fd5b6107c481610670565b81146107cf57600080fd5b50565b6000813590506107e1816107bb565b92915050565b6000602082840312156107fd576107fc6107b6565b5b600061080b848285016107d2565b91505092915050565b61081d816106f0565b82525050565b60006020820190506108386000830184610814565b92915050565b600082825260208201905092915050565b7f4e6f7420656e6f7567682065746865722073656e740000000000000000000000600082015250565b600061088560158361083e565b91506108908261084f565b602082019050919050565b600060208201905081810360008301526108b481610878565b9050919050565b60006108c6826106d0565b9050919050565b60008160601b9050919050565b60006108e5826108cd565b9050919050565b60006108f7826108da565b9050919050565b61090f61090a826108bb565b6108ec565b82525050565b6000819050919050565b61093061092b82610670565b610915565b82525050565b600061094282856108fe565b601482019150610952828461091f565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061099c82610670565b91506109a783610670565b9250826109b7576109b6610962565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a2b82610670565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610a5e57610a5d6109f1565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220cad8bb1b535f826d30f256009f3faaec5e88da69b9ae9c964c7edc58eb50d17e64736f6c634300080b0033",
  deployedBytecode:
    "0x6080604052600436106100705760003560e01c8063992f7db31161004e578063992f7db314610108578063c1af578514610145578063dbdff2c11461014f578063e580f47b1461017a57610070565b806312065fe01461007557806362a63e29146100a05780636d6fe230146100cb575b600080fd5b34801561008157600080fd5b5061008a6101a5565b6040516100979190610689565b60405180910390f35b3480156100ac57600080fd5b506100b56101ad565b6040516100c29190610794565b60405180910390f35b3480156100d757600080fd5b506100f260048036038101906100ed91906107e7565b61023b565b6040516100ff9190610823565b60405180910390f35b34801561011457600080fd5b5061012f600480360381019061012a91906107e7565b61026e565b60405161013c9190610823565b60405180910390f35b61014d6102ab565b005b34801561015b57600080fd5b506101646103c1565b6040516101719190610689565b60405180910390f35b34801561018657600080fd5b5061018f610415565b60405161019c9190610689565b60405180910390f35b600047905090565b6060600180548060200260200160405190810160405280929190818152602001828054801561023157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101e7575b5050505050905090565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b67016345785d8a00003410156102f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ed9061089b565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506706f05b59d3b2000047106103715761037061041b565b5b3373ffffffffffffffffffffffffffffffffffffffff167f6b8fe0f067804a78a12efa88b8428446c8d8a703d5604dffc63ac27fcbdcfd0d346040516103b79190610689565b60405180910390a2565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040516020016103f7929190610936565b6040516020818303038152906040528051906020012060001c905090565b60025481565b600060018054905061042b6103c1565b6104359190610991565b90506001818154811061044b5761044a6109c2565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156104bb573d6000803e3d6000fd5b50600181815481106104d0576104cf6109c2565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660036000600254815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506002600081548092919061056190610a20565b9190505550600067ffffffffffffffff81111561058157610580610a69565b5b6040519080825280602002602001820160405280156105af5781602001602082028036833780820191505090505b50600190805190602001906105c59291906105c9565b5050565b828054828255906000526020600020908101928215610642579160200282015b828111156106415782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906105e9565b5b50905061064f9190610653565b5090565b5b8082111561066c576000816000905550600101610654565b5090565b6000819050919050565b61068381610670565b82525050565b600060208201905061069e600083018461067a565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106fb826106d0565b9050919050565b61070b816106f0565b82525050565b600061071d8383610702565b60208301905092915050565b6000602082019050919050565b6000610741826106a4565b61074b81856106af565b9350610756836106c0565b8060005b8381101561078757815161076e8882610711565b975061077983610729565b92505060018101905061075a565b5085935050505092915050565b600060208201905081810360008301526107ae8184610736565b905092915050565b600080fd5b6107c481610670565b81146107cf57600080fd5b50565b6000813590506107e1816107bb565b92915050565b6000602082840312156107fd576107fc6107b6565b5b600061080b848285016107d2565b91505092915050565b61081d816106f0565b82525050565b60006020820190506108386000830184610814565b92915050565b600082825260208201905092915050565b7f4e6f7420656e6f7567682065746865722073656e740000000000000000000000600082015250565b600061088560158361083e565b91506108908261084f565b602082019050919050565b600060208201905081810360008301526108b481610878565b9050919050565b60006108c6826106d0565b9050919050565b60008160601b9050919050565b60006108e5826108cd565b9050919050565b60006108f7826108da565b9050919050565b61090f61090a826108bb565b6108ec565b82525050565b6000819050919050565b61093061092b82610670565b610915565b82525050565b600061094282856108fe565b601482019150610952828461091f565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061099c82610670565b91506109a783610670565b9250826109b7576109b6610962565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a2b82610670565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610a5e57610a5d6109f1565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220cad8bb1b535f826d30f256009f3faaec5e88da69b9ae9c964c7edc58eb50d17e64736f6c634300080b0033",
  linkReferences: {},
  deployedLinkReferences: {},
};

export const contractAddress = "0x878A9C8Bd1070371Fa8336656224dB1664aF9Bb6";
export const contractABI = contractDetails.abi;
