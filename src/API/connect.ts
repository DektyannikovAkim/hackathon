import { providers } from "ethers";

export const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum }: any = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

export const onClickConnect = async () => {
  const { ethereum }: any = window;

  try {
    // Will open the MetaMask UI
    // You should disable this button while the request is pending!
    const data = await ethereum.request({ method: "eth_requestAccounts" });

    const provider = new providers.Web3Provider(ethereum);

    const signer = provider.getSigner();

    console.log(signer);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAdress = async () => {
  const { ethereum }: any = window;

  try {
    // Will open the MetaMask UI
    // You should disable this button while the request is pending!
    const data = (await ethereum.request({
      method: "eth_requestAccounts",
    })) as string[];

    return data[0];
  } catch (error) {
    console.error(error);
    return "";
  }
};

// export const connectMetamask = async () => {
//   try {
//     if (!window.ethereum) throw new Error("Please set up MetaMask properly");
//     await (window.ethereum as any).enable();
//     this.provider = new providers.Web3Provider(window.ethereum || window.web3);
//     this.signer = this.provider.getSigner();
//     this.wallet = await this.signer.getAddress();
//     await this.updateChainId();
//   } catch (error) {
//     console.error(error);
//   }
// };
