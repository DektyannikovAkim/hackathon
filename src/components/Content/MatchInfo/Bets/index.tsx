import React from "react";
import { BetInfo } from "../../../../modules";
import { ViewButtton } from "../../../shared/shared";
import { Row } from "../style";
import * as styles from "./style";

const bets: BetInfo[] = [
  {
    matchId: "asdasd",
    result: 0,
    rate: 12,
    amount: 1000,
    claimed: false,
  },
  {
    matchId: "asdadfdfgdfdsd",
    result: 1,
    rate: 12,
    amount: 1000,
    claimed: false,
  },
  {
    matchId: "asddfgdfgasd",
    result: 2,
    rate: 12,
    amount: 1000,
    claimed: false,
  },
];

export const Bets = () => {
  return (
    <styles.Container>
      {bets.map((el, index) => (
        <styles.BetContainer key={index}>
          <Row>
            <span>Bet:</span>
            <span>{el.amount}</span>
          </Row>
          <Row>
            <span>Match odds:</span>
            <span>{el.rate}</span>
          </Row>
          <Row>
            <span>Bet result:</span>
            <span>{el.result}</span>
          </Row>
          {!el.claimed ? <ViewButtton>claim reward</ViewButtton> : ""}
        </styles.BetContainer>
      ))}
    </styles.Container>
  );
};
