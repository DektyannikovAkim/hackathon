import { makeAutoObservable } from "mobx";
import { Match } from "../modules";

class BetStore {
  currentMatch: number | null = null;

  matches: Match[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  
}

export default BetStore;
