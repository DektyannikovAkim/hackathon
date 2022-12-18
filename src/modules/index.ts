import { BigNumber } from "ethers";

export interface Match {
  team0: string;
  team1: string;
  result: Result;
  finishTimestamp: number;
  poolWin: number;
  poolLose: number;
  poolTie: number;
}

export interface BetInfo {
  matchId: BigNumber;
  result: Result;
  rate: BigNumber;
  amount: BigNumber;
  claimed: boolean;
}

export enum Result {
  NULL,
  WIN,
  LOSE,
  TIE,
}
