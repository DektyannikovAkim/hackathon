import { makeAutoObservable, runInAction } from "mobx";
import { Match } from "../modules";

class MatchStore {
  currentMatch: Match | null = null;

  openedMatch: boolean = false;

  openedBet: boolean = false;

  matches: Match[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  openModal = (bool: boolean) => {
    this.openedMatch = bool;
  };

  openBet = (bool: boolean) => {
    this.openedBet = bool;
  };

  setCurrentMatch = (data: Match) => {
    runInAction(() => (this.currentMatch = data));
  };
}

export default MatchStore;
