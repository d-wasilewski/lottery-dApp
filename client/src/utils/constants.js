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
    {
      inputs: [],
      name: "pickWinner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600281905550610ad8806100686000396000f3fe60806040526004361061007b5760003560e01c8063992f7db31161004e578063992f7db31461012a578063c1af578514610167578063dbdff2c114610171578063e580f47b1461019c5761007b565b806312065fe0146100805780635d495aea146100ab57806362a63e29146100c25780636d6fe230146100ed575b600080fd5b34801561008c57600080fd5b506100956101c7565b6040516100a29190610693565b60405180910390f35b3480156100b757600080fd5b506100c06101cf565b005b3480156100ce57600080fd5b506100d761037d565b6040516100e4919061079e565b60405180910390f35b3480156100f957600080fd5b50610114600480360381019061010f91906107f1565b61040b565b604051610121919061082d565b60405180910390f35b34801561013657600080fd5b50610151600480360381019061014c91906107f1565b61043e565b60405161015e919061082d565b60405180910390f35b61016f61047b565b005b34801561017d57600080fd5b50610186610579565b6040516101939190610693565b60405180910390f35b3480156101a857600080fd5b506101b16105cd565b6040516101be9190610693565b60405180910390f35b600047905090565b60006001805490506101df610579565b6101e99190610877565b9050600181815481106101ff576101fe6108a8565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561026f573d6000803e3d6000fd5b5060018181548110610284576102836108a8565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660036000600254815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506002600081548092919061031590610906565b9190505550600067ffffffffffffffff8111156103355761033461094f565b5b6040519080825280602002602001820160405280156103635781602001602082028036833780820191505090505b50600190805190602001906103799291906105d3565b5050565b6060600180548060200260200160405190810160405280929190818152602001828054801561040157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103b7575b5050505050905090565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b67016345785d8a00003410156104c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bd906109db565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f6b8fe0f067804a78a12efa88b8428446c8d8a703d5604dffc63ac27fcbdcfd0d3460405161056f9190610693565b60405180910390a2565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040516020016105af929190610a76565b6040516020818303038152906040528051906020012060001c905090565b60025481565b82805482825590600052602060002090810192821561064c579160200282015b8281111561064b5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906105f3565b5b509050610659919061065d565b5090565b5b8082111561067657600081600090555060010161065e565b5090565b6000819050919050565b61068d8161067a565b82525050565b60006020820190506106a86000830184610684565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610705826106da565b9050919050565b610715816106fa565b82525050565b6000610727838361070c565b60208301905092915050565b6000602082019050919050565b600061074b826106ae565b61075581856106b9565b9350610760836106ca565b8060005b83811015610791578151610778888261071b565b975061078383610733565b925050600181019050610764565b5085935050505092915050565b600060208201905081810360008301526107b88184610740565b905092915050565b600080fd5b6107ce8161067a565b81146107d957600080fd5b50565b6000813590506107eb816107c5565b92915050565b600060208284031215610807576108066107c0565b5b6000610815848285016107dc565b91505092915050565b610827816106fa565b82525050565b6000602082019050610842600083018461081e565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006108828261067a565b915061088d8361067a565b92508261089d5761089c610848565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006109118261067a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610944576109436108d7565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082825260208201905092915050565b7f4e6f7420656e6f7567682065746865722073656e740000000000000000000000600082015250565b60006109c560158361097e565b91506109d08261098f565b602082019050919050565b600060208201905081810360008301526109f4816109b8565b9050919050565b6000610a06826106da565b9050919050565b60008160601b9050919050565b6000610a2582610a0d565b9050919050565b6000610a3782610a1a565b9050919050565b610a4f610a4a826109fb565b610a2c565b82525050565b6000819050919050565b610a70610a6b8261067a565b610a55565b82525050565b6000610a828285610a3e565b601482019150610a928284610a5f565b602082019150819050939250505056fea2646970667358221220fcfb6f95830ebba3076bf0e49111bdc878102eb21a6d5b3b9e470b39f9a5cfde64736f6c634300080b0033",
  deployedBytecode:
    "0x60806040526004361061007b5760003560e01c8063992f7db31161004e578063992f7db31461012a578063c1af578514610167578063dbdff2c114610171578063e580f47b1461019c5761007b565b806312065fe0146100805780635d495aea146100ab57806362a63e29146100c25780636d6fe230146100ed575b600080fd5b34801561008c57600080fd5b506100956101c7565b6040516100a29190610693565b60405180910390f35b3480156100b757600080fd5b506100c06101cf565b005b3480156100ce57600080fd5b506100d761037d565b6040516100e4919061079e565b60405180910390f35b3480156100f957600080fd5b50610114600480360381019061010f91906107f1565b61040b565b604051610121919061082d565b60405180910390f35b34801561013657600080fd5b50610151600480360381019061014c91906107f1565b61043e565b60405161015e919061082d565b60405180910390f35b61016f61047b565b005b34801561017d57600080fd5b50610186610579565b6040516101939190610693565b60405180910390f35b3480156101a857600080fd5b506101b16105cd565b6040516101be9190610693565b60405180910390f35b600047905090565b60006001805490506101df610579565b6101e99190610877565b9050600181815481106101ff576101fe6108a8565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561026f573d6000803e3d6000fd5b5060018181548110610284576102836108a8565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660036000600254815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506002600081548092919061031590610906565b9190505550600067ffffffffffffffff8111156103355761033461094f565b5b6040519080825280602002602001820160405280156103635781602001602082028036833780820191505090505b50600190805190602001906103799291906105d3565b5050565b6060600180548060200260200160405190810160405280929190818152602001828054801561040157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103b7575b5050505050905090565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b67016345785d8a00003410156104c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bd906109db565b60405180910390fd5b6001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f6b8fe0f067804a78a12efa88b8428446c8d8a703d5604dffc63ac27fcbdcfd0d3460405161056f9190610693565b60405180910390a2565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040516020016105af929190610a76565b6040516020818303038152906040528051906020012060001c905090565b60025481565b82805482825590600052602060002090810192821561064c579160200282015b8281111561064b5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906105f3565b5b509050610659919061065d565b5090565b5b8082111561067657600081600090555060010161065e565b5090565b6000819050919050565b61068d8161067a565b82525050565b60006020820190506106a86000830184610684565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610705826106da565b9050919050565b610715816106fa565b82525050565b6000610727838361070c565b60208301905092915050565b6000602082019050919050565b600061074b826106ae565b61075581856106b9565b9350610760836106ca565b8060005b83811015610791578151610778888261071b565b975061078383610733565b925050600181019050610764565b5085935050505092915050565b600060208201905081810360008301526107b88184610740565b905092915050565b600080fd5b6107ce8161067a565b81146107d957600080fd5b50565b6000813590506107eb816107c5565b92915050565b600060208284031215610807576108066107c0565b5b6000610815848285016107dc565b91505092915050565b610827816106fa565b82525050565b6000602082019050610842600083018461081e565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006108828261067a565b915061088d8361067a565b92508261089d5761089c610848565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006109118261067a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610944576109436108d7565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082825260208201905092915050565b7f4e6f7420656e6f7567682065746865722073656e740000000000000000000000600082015250565b60006109c560158361097e565b91506109d08261098f565b602082019050919050565b600060208201905081810360008301526109f4816109b8565b9050919050565b6000610a06826106da565b9050919050565b60008160601b9050919050565b6000610a2582610a0d565b9050919050565b6000610a3782610a1a565b9050919050565b610a4f610a4a826109fb565b610a2c565b82525050565b6000819050919050565b610a70610a6b8261067a565b610a55565b82525050565b6000610a828285610a3e565b601482019150610a928284610a5f565b602082019150819050939250505056fea2646970667358221220fcfb6f95830ebba3076bf0e49111bdc878102eb21a6d5b3b9e470b39f9a5cfde64736f6c634300080b0033",
  linkReferences: {},
  deployedLinkReferences: {},
};

export const contractAddress = "0xBAD55aEC59541F773a9c74bE9156DB44576fEC6a";
export const contractABI = contractDetails.abi;
