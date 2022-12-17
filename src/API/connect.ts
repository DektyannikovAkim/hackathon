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
//     console.log("Connecting to metamask...");

//     if (!(window as any).ethereum)
//       throw new Error("Please set up MetaMask properly");
//     const wallet = (
//       await (window as any).ethereum.request?.({
//         method: "eth_requestAccounts",
//       })
//     )[0] as string;

//     this.address = wallet;

//     const provider = new providers.Web3Provider(
//       ((window as any).ethereum as any) || (window as any).web3
//     );

//     const signer = provider.getSigner();

//     const chainId = (await provider?.getNetwork())?.chainId;

//     if (chainId !== node("bsc_testnet").chainId) {
//       await (window as any).ethereum.request({
//         method: "wallet_addEthereumChain",
//         params: [
//           {
//             chainId: node("bsc_testnet").chainIdHex,
//             rpcUrls: [node("bsc_testnet").rpc],
//             chainName: node("bsc_testnet").name,
//             nativeCurrency: {
//               name: "BNB",
//               symbol: "BNB",
//               decimals: 18,
//             },
//             blockExplorerUrls: ["https://testnet.bscscan.com/"],
//           },
//         ],
//       });
//     }

//     this.connect(wallet, signer, chainId.toString());

//     ((window as any).ethereum as any).once(
//       "chainChanged",
//       async (chainId: string) => {
//         await this.connectMetamask();
//       }
//     );

//     ((window as any).ethereum as any).once(
//       "accountsChanged",
//       this.addressChangeHandler
//     );
//   } catch (error) {
//     console.error(error);
//   }
// };
