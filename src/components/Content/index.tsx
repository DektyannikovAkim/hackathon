import React, { useMemo } from "react";
import { BetInfo } from "../../modules";
import BetStore from "../../state/betState";
import { MatchItem } from "./MatchItem";
import * as styles from "./style";

const MATCHES: BetInfo[] = [
  {
    matchId: "Fulham U18 vs Rochdale U18",
    result: 0,
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: "Argeş vs Mioveni",
    result: 1,
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: "Liverpool Feds W vs West Bromwich Albion W",
    result: 1,
    rate: 123,
    amount: 123,
    claimed: false,
  },
  {
    matchId: "Burnley W vs Norwich City W",
    result: 1,
    rate: 123,
    amount: 123,
    claimed: false,
  },
];

export const Content = () => {
  const state = useMemo(() => new BetStore(), []);

  return (
    <styles.Container>
      {MATCHES.map((el, index) => (
        <MatchItem key={index + el.matchId} data={el} />
      ))}
    </styles.Container>
  );
};
