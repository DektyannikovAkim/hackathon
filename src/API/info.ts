import { Match, BetInfo } from "./../modules/index";

import { ethers, providers } from "ethers";
import { Token, BetMag } from "./typechain";
import contracts from "./contracts.json";
import { BNToNumstr } from "./decimals";

const tokenAddress = contracts[97][0].contracts.Token.address;
const tokenAbi = contracts[97][0].contracts.Token.abi;
const betAddress = contracts[97][0].contracts.Token.address;
const betAbi = contracts[97][0].contracts.Token.abi;
let decimals = 18;

const provider = new providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545"
);

const token = new ethers.Contract(tokenAddress, tokenAbi, provider) as Token;
const betmag = new ethers.Contract(betAddress, betAbi, provider) as BetMag;

let matches = [] as Match[];
let info = [] as BetInfo[];

async function loadMatches() {
  try {
    matches = await betmag.getAllMatches();
  } catch (err) {
    console.log(err);
  }
}

async function loadBetInfo(address: string, matchId: number) {
  info = await betmag.getUserBets(address, matchId);
}
