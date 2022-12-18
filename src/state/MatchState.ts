import { makeAutoObservable, runInAction } from "mobx";
import { loadMatches } from "../API/info";
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

  getMatches = async () => {
    try {
      const data = await loadMatches();
      console.log("matches", data);
    } catch (error) {
      console.log(error);
    }
  };
}

export default MatchStore;
