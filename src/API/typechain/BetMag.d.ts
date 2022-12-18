/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BetMagInterface extends ethers.utils.Interface {
  functions: {
    "addMatches(tuple[])": FunctionFragment;
    "bet(uint256,uint8,uint256)": FunctionFragment;
    "betFee()": FunctionFragment;
    "claim(uint256)": FunctionFragment;
    "feeWallet()": FunctionFragment;
    "getAllMatches()": FunctionFragment;
    "getBetRate(uint256,uint8)": FunctionFragment;
    "getUserBets(address,uint256)": FunctionFragment;
    "getUserBetsMatches(address)": FunctionFragment;
    "matchesCounter()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFeeWallet(address)": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addMatches",
    values: [
      {
        team0: string;
        team1: string;
        result: BigNumberish;
        finishTimestamp: BigNumberish;
        poolWin: BigNumberish;
        poolLose: BigNumberish;
        poolTie: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bet",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "betFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "feeWallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAllMatches",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBetRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserBets",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserBetsMatches",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "matchesCounter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeWallet",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addMatches", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeWallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllMatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBetRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserBets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserBetsMatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "matchesCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class BetMag extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BetMagInterface;

  functions: {
    addMatches(
      matches_: {
        team0: string;
        team1: string;
        result: BigNumberish;
        finishTimestamp: BigNumberish;
        poolWin: BigNumberish;
        poolLose: BigNumberish;
        poolTie: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bet(
      matchId_: BigNumberish,
      result_: BigNumberish,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    betFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    claim(
      matchId_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeWallet(overrides?: CallOverrides): Promise<[string]>;

    getAllMatches(
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          string,
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          team0: string;
          team1: string;
          result: number;
          finishTimestamp: BigNumber;
          poolWin: BigNumber;
          poolLose: BigNumber;
          poolTie: BigNumber;
        })[]
      ]
    >;

    getBetRate(
      matchId_: BigNumberish,
      result_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserBets(
      user: string,
      matchId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, number, BigNumber, BigNumber, boolean] & {
          matchId: BigNumber;
          result: number;
          rate: BigNumber;
          amount: BigNumber;
          claimed: boolean;
        })[]
      ]
    >;

    getUserBetsMatches(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    matchesCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeWallet(
      newFeeWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addMatches(
    matches_: {
      team0: string;
      team1: string;
      result: BigNumberish;
      finishTimestamp: BigNumberish;
      poolWin: BigNumberish;
      poolLose: BigNumberish;
      poolTie: BigNumberish;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bet(
    matchId_: BigNumberish,
    result_: BigNumberish,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  betFee(overrides?: CallOverrides): Promise<BigNumber>;

  claim(
    matchId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeWallet(overrides?: CallOverrides): Promise<string>;

  getAllMatches(
    overrides?: CallOverrides
  ): Promise<
    ([string, string, number, BigNumber, BigNumber, BigNumber, BigNumber] & {
      team0: string;
      team1: string;
      result: number;
      finishTimestamp: BigNumber;
      poolWin: BigNumber;
      poolLose: BigNumber;
      poolTie: BigNumber;
    })[]
  >;

  getBetRate(
    matchId_: BigNumberish,
    result_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserBets(
    user: string,
    matchId_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, number, BigNumber, BigNumber, boolean] & {
      matchId: BigNumber;
      result: number;
      rate: BigNumber;
      amount: BigNumber;
      claimed: boolean;
    })[]
  >;

  getUserBetsMatches(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  matchesCounter(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeWallet(
    newFeeWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMatches(
      matches_: {
        team0: string;
        team1: string;
        result: BigNumberish;
        finishTimestamp: BigNumberish;
        poolWin: BigNumberish;
        poolLose: BigNumberish;
        poolTie: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    bet(
      matchId_: BigNumberish,
      result_: BigNumberish,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    betFee(overrides?: CallOverrides): Promise<BigNumber>;

    claim(matchId_: BigNumberish, overrides?: CallOverrides): Promise<void>;

    feeWallet(overrides?: CallOverrides): Promise<string>;

    getAllMatches(
      overrides?: CallOverrides
    ): Promise<
      ([string, string, number, BigNumber, BigNumber, BigNumber, BigNumber] & {
        team0: string;
        team1: string;
        result: number;
        finishTimestamp: BigNumber;
        poolWin: BigNumber;
        poolLose: BigNumber;
        poolTie: BigNumber;
      })[]
    >;

    getBetRate(
      matchId_: BigNumberish,
      result_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserBets(
      user: string,
      matchId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, number, BigNumber, BigNumber, boolean] & {
        matchId: BigNumber;
        result: number;
        rate: BigNumber;
        amount: BigNumber;
        claimed: boolean;
      })[]
    >;

    getUserBetsMatches(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    matchesCounter(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFeeWallet(
      newFeeWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addMatches(
      matches_: {
        team0: string;
        team1: string;
        result: BigNumberish;
        finishTimestamp: BigNumberish;
        poolWin: BigNumberish;
        poolLose: BigNumberish;
        poolTie: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bet(
      matchId_: BigNumberish,
      result_: BigNumberish,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    betFee(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      matchId_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeWallet(overrides?: CallOverrides): Promise<BigNumber>;

    getAllMatches(overrides?: CallOverrides): Promise<BigNumber>;

    getBetRate(
      matchId_: BigNumberish,
      result_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserBets(
      user: string,
      matchId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserBetsMatches(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    matchesCounter(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeWallet(
      newFeeWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMatches(
      matches_: {
        team0: string;
        team1: string;
        result: BigNumberish;
        finishTimestamp: BigNumberish;
        poolWin: BigNumberish;
        poolLose: BigNumberish;
        poolTie: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bet(
      matchId_: BigNumberish,
      result_: BigNumberish,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    betFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      matchId_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllMatches(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBetRate(
      matchId_: BigNumberish,
      result_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserBets(
      user: string,
      matchId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserBetsMatches(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    matchesCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeWallet(
      newFeeWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}