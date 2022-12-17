import { makeAutoObservable, runInAction } from "mobx";
import { getAdress } from "../API/connect";

class UserStore {
  adress = "";

  constructor() {
    makeAutoObservable(this);
  }

  getAdressWallet = async () => {
    try {
      const data = await getAdress();

      runInAction(() => (this.adress = data));
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserStore;
