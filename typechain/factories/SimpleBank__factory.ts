/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SimpleBank, SimpleBankInterface } from "../SimpleBank";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "entitiesAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountDeposited",
        type: "uint256",
      },
    ],
    name: "LogDepositMade",
    type: "event",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
        name: "withdrawAmount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610531806100616000396000f3fe6080604052600436106100345760003560e01c80632e1a7d4d146100395780638da5cb5b14610076578063d0e30db0146100a1575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b9190610340565b6100bf565b60405161006d91906103cf565b60405180910390f35b34801561008257600080fd5b5061008b610231565b604051610098919061038b565b60405180910390f35b6100a9610257565b6040516100b691906103cf565b60405180910390f35b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054106101eb57816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546101549190610440565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050506101ea57816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546101e291906103ea565b925050819055505b5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102a791906103ea565b925050819055507fa8126f7572bb1fdeae5b5aa9ec126438b91f658a07873f009d041ae690f3a19333346040516102df9291906103a6565b60405180910390a16000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60008135905061033a816104e4565b92915050565b600060208284031215610356576103556104df565b5b60006103648482850161032b565b91505092915050565b61037681610474565b82525050565b610385816104a6565b82525050565b60006020820190506103a0600083018461036d565b92915050565b60006040820190506103bb600083018561036d565b6103c8602083018461037c565b9392505050565b60006020820190506103e4600083018461037c565b92915050565b60006103f5826104a6565b9150610400836104a6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610435576104346104b0565b5b828201905092915050565b600061044b826104a6565b9150610456836104a6565b925082821015610469576104686104b0565b5b828203905092915050565b600061047f82610486565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b6104ed816104a6565b81146104f857600080fd5b5056fea2646970667358221220fe32f69bc2d6e99dcdaa532ee830f5249b25f70bfef85b595e55dc3b6e58c3d064736f6c63430008050033";

export class SimpleBank__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleBank> {
    return super.deploy(overrides || {}) as Promise<SimpleBank>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimpleBank {
    return super.attach(address) as SimpleBank;
  }
  connect(signer: Signer): SimpleBank__factory {
    return super.connect(signer) as SimpleBank__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleBankInterface {
    return new utils.Interface(_abi) as SimpleBankInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleBank {
    return new Contract(address, _abi, signerOrProvider) as SimpleBank;
  }
}