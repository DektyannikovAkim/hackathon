import { ethers, providers } from "ethers";
export let provider = {} as providers.Web3Provider;
export let signer = {} as ethers.providers.JsonRpcSigner;
export let wallet = "" as string;

declare global {
  interface Window {
    ethereum?: any;
  }
}

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

export const connectMetamask = async () => {
  try {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    wallet = await signer.getAddress();
    console.log("Account:", wallet);
  } catch (error) {
    console.error(error);
  }
};
