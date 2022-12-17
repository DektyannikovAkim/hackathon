import React from "react";
import { BetInfo } from "../../modules";
import { MatchItem } from "./MatchItem";
import * as styles from "./style";

const MATCHES: BetInfo[] = [
  {
    matchId: 1,
    result: "LOSE",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 2,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 3,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 4,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 22,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 33,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 44,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 25,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 3234536,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 482626534,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 33343,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 443463,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 234211535,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 31112436,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 411138,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 33311143,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 4111143463,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 234531115,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 32411136,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: 4311118,
    result: "WIN",
    rate: 123,
    amount: 123,
    claimed: false,
  },
];

export const Content = () => {
  return (
    <styles.Container>
      {MATCHES.map((el, index) => (
        <MatchItem key={index + el.matchId} matchName={el.matchId} />
      ))}
    </styles.Container>
  );
};
