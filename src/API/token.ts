import { BigNumber, ethers, providers } from "ethers";
import { Token } from "./typechain";
import contracts from "./contracts.json";
import { BNToNumstr } from "./decimals";

const tokenAddress = contracts[97][0].contracts.Token.address;
const tokenAbi = contracts[97][0].contracts.Token.abi;
export let decimals = 18;

const provider = new providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545"
);

const token = new ethers.Contract(tokenAddress, tokenAbi, provider) as Token;

async function getBalance(address: string) {
  let balance = BigNumber.from("0");
  try {
    balance = await token.balanceOf(address);
  } catch (err) {
    console.log(err);
  }
  return BNToNumstr(balance, 18, 3);
}

async function getDecimals() {
  try {
    decimals = await token.decimals();
  } catch (err) {
    console.log(err);
  }
}
