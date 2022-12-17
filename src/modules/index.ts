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
  matchId: number;
  result: Result;
  rate: number;
  amount: number;
  claimed: boolean;
}

type Result = "WIN" | "LOSE" | "TIE";
