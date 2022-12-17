/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Merkle, MerkleInterface } from "../Merkle";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61026661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80635a9a49c71461003a575b600080fd5b61004d610048366004610125565b610061565b604051901515815260200160405180910390f35b600081815b8551811015610104576000868281518110610083576100836101f3565b602002602001015190508083106100c3576040805160208101839052908101849052606001604051602081830303815290604052805190602001206100ee565b6040805160208101859052908101829052606001604051602081830303815290604052805190602001205b92505080806100fc90610209565b915050610066565b509092149392505050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561013a57600080fd5b833567ffffffffffffffff8082111561015257600080fd5b818601915086601f83011261016657600080fd5b813560208282111561017a5761017a61010f565b8160051b604051601f19603f8301168101818110868211171561019f5761019f61010f565b60405292835281830193508481018201928a8411156101bd57600080fd5b948201945b838610156101db578535855294820194938201936101c2565b9a918901359950506040909701359695505050505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161022957634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212201ba0b9a63897b91f43095515de3d0e855d3a65e6900fd0656c6b4f8dc35b132d64736f6c634300080f0033";

export class Merkle__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Merkle> {
    return super.deploy(overrides || {}) as Promise<Merkle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Merkle {
    return super.attach(address) as Merkle;
  }
  connect(signer: Signer): Merkle__factory {
    return super.connect(signer) as Merkle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleInterface {
    return new utils.Interface(_abi) as MerkleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Merkle {
    return new Contract(address, _abi, signerOrProvider) as Merkle;
  }
}
