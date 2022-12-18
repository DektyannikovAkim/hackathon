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
    "bet(string,uint8,uint256)": FunctionFragment;
    "betFee()": FunctionFragment;
    "claim(string)": FunctionFragment;
    "feeWallet()": FunctionFragment;
    "getAllMatches()": FunctionFragment;
    "getBetRate(string,uint8)": FunctionFragment;
    "getUserBets(address,string)": FunctionFragment;
    "getUserBetsMatches(address)": FunctionFragment;
    "loadResults(string[],uint8[])": FunctionFragment;
    "matchesCounter()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFeeWallet(address)": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawStables(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addMatches",
    values: [
      {
        id: string;
        team0: string;
        team1: string;
        result: BigNumberish;
        finishTimestamp: BigNumberish;
        poolWin: BigNumberish;
        poolLose: BigNumberish;
        poolTie: BigNumberish;
        maxBet: BigNumberish;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bet",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "betFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values: [string]): string;
  encodeFunctionData(functionFragment: "feeWallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAllMatches",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBetRate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserBets",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserBetsMatches",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "loadResults",
    values: [string[], BigNumberish[]]
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
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStables",
    values: [BigNumberish]
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
    functionFragment: "loadResults",
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
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStables",
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
        id: string;
        team0: string;
        team1: string;
        result: BigNumberish;
        finishTimestamp: BigNumberish;
        poolWin: BigNumberish;
        poolLose: BigNumberish;
        poolTie: BigNumberish;
        maxBet: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bet(
      matchId_: string,
      result_: BigNumberish,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    betFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    claim(
      matchId_: string,
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
          string,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          id: string;
          team0: string;
          team1: string;
          result: number;
          finishTimestamp: BigNumber;
          poolWin: BigNumber;
          poolLose: BigNumber;
          poolTie: BigNumber;
          maxBet: BigNumber;
        })[]
      ]
    >;

    getBetRate(
      matchId_: string,
      result_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserBets(
      user: string,
      matchId_: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, number, BigNumber, BigNumber, boolean] & {
          matchId: string;
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
    ): Promise<[string[]]>;

    loadResults(
      matchIds_: string[],
      results_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    matchesCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeWallet(
      newFeeWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      newOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawStables(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addMatches(
    matches_: {
      id: string;
      team0: string;
      team1: string;
      result: BigNumberish;
      finishTimestamp: BigNumberish;
      poolWin: BigNumberish;
      poolLose: BigNumberish;
      poolTie: BigNumberish;
      maxBet: BigNumberish;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bet(
    matchId_: string,
    result_: BigNumberish,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  betFee(overrides?: CallOverrides): Promise<BigNumber>;

  claim(
    matchId_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeWallet(overrides?: CallOverrides): Promise<string>;

  getAllMatches(
    overrides?: CallOverrides
  ): Promise<
    ([
      string,
      string,
      string,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      id: string;
      team0: string;
      team1: string;
      result: number;
      finishTimestamp: BigNumber;
      poolWin: BigNumber;
      poolLose: BigNumber;
      poolTie: BigNumber;
      maxBet: BigNumber;
    })[]
  >;

  getBetRate(
    matchId_: string,
    result_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserBets(
    user: string,
    matchId_: string,
    overrides?: CallOverrides
  ): Promise<
    ([string, number, BigNumber, BigNumber, boolean] & {
      matchId: string;
      result: number;
      rate: BigNumber;
      amount: BigNumber;
      claimed: boolean;
    })[]
  >;

  getUserBetsMatches(
    user: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  loadResults(
    matchIds_: string[],
    results_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  matchesCounter(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeWallet(
    newFeeWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    newOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawStables(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMatches(
      matches_: {
        id: string;
        team0: string;
        team1: string;
        result: BigNumberish;
        finishTimestamp: BigNumberish;
        poolWin: BigNumberish;
        poolLose: BigNumberish;
        poolTie: BigNumberish;
        maxBet: BigNumberish;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    bet(
      matchId_: string,
      result_: BigNumberish,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    betFee(overrides?: CallOverrides): Promise<BigNumber>;

    claim(matchId_: string, overrides?: CallOverrides): Promise<void>;

    feeWallet(overrides?: CallOverrides): Promise<string>;

    getAllMatches(
      overrides?: CallOverrides
    ): Promise<
      ([
        string,
        string,
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: string;
        team0: string;
        team1: string;
        result: number;
        finishTimestamp: BigNumber;
        poolWin: BigNumber;
        poolLose: BigNumber;
        poolTie: BigNumber;
        maxBet: BigNumber;
      })[]
    >;

    getBetRate(
      matchId_: string,
      result_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserBets(
      user: string,
      matchId_: string,
      overrides?: CallOverrides
    ): Promise<
      ([string, number, BigNumber, BigNumber, boolean] & {
        matchId: string;
        result: number;
        rate: BigNumber;
        amount: BigNumber;
        claimed: boolean;
      })[]
    >;

    getUserBetsMatches(
      user: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    loadResults(
      matchIds_: string[],
      results_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    matchesCounter(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFeeWallet(
      newFeeWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(newOracle: string, overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawStables(
      amount: BigNumberish,
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
        id: string;
        team0: string;
        team1: string;
        result: BigNumberish;
        finishTimestamp: BigNumberish;
        poolWin: BigNumberish;
        poolLose: BigNumberish;
        poolTie: BigNumberish;
        maxBet: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bet(
      matchId_: string,
      result_: BigNumberish,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    betFee(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      matchId_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeWallet(overrides?: CallOverrides): Promise<BigNumber>;

    getAllMatches(overrides?: CallOverrides): Promise<BigNumber>;

    getBetRate(
      matchId_: string,
      result_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserBets(
      user: string,
      matchId_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserBetsMatches(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    loadResults(
      matchIds_: string[],
      results_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
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

    setOracle(
      newOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawStables(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMatches(
      matches_: {
        id: string;
        team0: string;
        team1: string;
        result: BigNumberish;
        finishTimestamp: BigNumberish;
        poolWin: BigNumberish;
        poolLose: BigNumberish;
        poolTie: BigNumberish;
        maxBet: BigNumberish;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bet(
      matchId_: string,
      result_: BigNumberish,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    betFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      matchId_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllMatches(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBetRate(
      matchId_: string,
      result_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserBets(
      user: string,
      matchId_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserBetsMatches(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    loadResults(
      matchIds_: string[],
      results_: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
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

    setOracle(
      newOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawStables(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
