import { makeAutoObservable, runInAction } from "mobx";
import { getAdress } from "../API/connect";
import { loadBetInfo, loadMatches } from "../API/info";
import { BetInfo, Match } from "../modules";

class MatchStore {
  adress: string = "";

  currentMatch: Match | null = null;

  openedMatch: boolean = false;

  openedBet: boolean = false;

  matches: Match[] = [];

  bets: BetInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadData = () => {
    this.setAdress();
    this.getMatches();
  };

  setAdress = async () => {
    try {
      const data = await getAdress();

      this.adress = data;
    } catch (error) {
      this.adress = "";
    }
  };

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

  getBets = async (id: number) => {
    try {
      const data = await loadBetInfo(this.adress, id);

      this.bets = data;
    } catch (error) {
      this.bets = [];
      console.log(error);
    }
  };
}

export default MatchStore;
