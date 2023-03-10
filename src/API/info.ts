import { Match, BetInfo } from "./../modules/index";

import { BigNumber, ethers, providers } from "ethers";
import { Token, BetMag } from "./typechain";
import contracts from "./contracts.json";
import { BNToNumstr } from "./decimals";
import { decimals } from "./token";
import { signer } from "./connect";

const tokenAddress = contracts[97][0].contracts.Token.address;
const tokenAbi = contracts[97][0].contracts.Token.abi;
const betAddress = contracts[97][0].contracts.BetMag.address;
const betAbi = contracts[97][0].contracts.BetMag.abi;
let rates = [] as string[];

const provider = new providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545"
);

const token = new ethers.Contract(tokenAddress, tokenAbi, provider) as Token;
const betmag = new ethers.Contract(betAddress, betAbi, provider) as BetMag;

let matches = [] as Match[];
let info = [] as BetInfo[];

export const loadMatches = async () => {
  try {
    const data = await betmag.getAllMatches();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const loadBetInfo = async (address: string, matchId: number) => {
  try {
    return await betmag.getUserBets(address, matchId);
  } catch (error) {
    return [];
  }
};

export const loadCurrentRateForMatch = async (matchId: number) => {
  try {
    rates[matchId] = BNToNumstr(
      await betmag.getBetRate(matchId, 1),
      decimals,
      2
    );
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const bet = async (
  matchId: number,
  amount: string,
  result: 0 | 1 | 2 | 3
) => {
  try {
    let tx = await betmag
      .connect(signer)
      .bet(matchId, result, BigNumber.from(amount).mul(decimals));
    await tx.wait();
  } catch (err) {
    console.log(err);
  }
};

export const claim = async (matchId: number) => {
  try {
    let tx = await betmag.connect(signer).claim(matchId);
    await tx.wait();
  } catch (err) {
    console.log(err);
  }
};
