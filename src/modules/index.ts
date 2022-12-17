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
  matchId: string;
  result: Result;
  rate: number;
  amount: number;
  claimed: boolean;
}

export enum Result {
  NULL,
  WIN,
  LOSE,
  TIE,
}
