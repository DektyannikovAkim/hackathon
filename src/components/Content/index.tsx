import React, { useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { MatchContext } from "../../context/match";
import { Match } from "../../modules";
import MatchStore from "../../state/MatchState";
import { MatchItem } from "./MatchItem";
import * as styles from "./style";
import { MatchInfo } from "./MatchInfo";

const MATCHES: Match[] = [
  {
    team0: "Barselona",
    team1: "Argentina",
    result: 0,
    finishTimestamp: 0,
    poolWin: 10,
    poolLose: 25,
    poolTie: 55,
  },
  {
    team0: "Frebch",
    team1: "Germany",
    result: 0,
    finishTimestamp: 0,
    poolWin: 10,
    poolLose: 25,
    poolTie: 55,
  },
  {
    team0: "Russia",
    team1: "Poland",
    result: 2,
    finishTimestamp: 0,
    poolWin: 10,
    poolLose: 25,
    poolTie: 55,
  },
  {
    team0: "China",
    team1: "Japan",
    result: 1,
    finishTimestamp: 0,
    poolWin: 10,
    poolLose: 25,
    poolTie: 55,
  },
];

export const Content = observer(() => {
  const state = useMemo(() => new MatchStore(), []);

  useEffect(() => {
    state.loadData();
  }, [state]);

  return (
    <MatchContext.Provider value={state}>
      <styles.Container>
        {MATCHES.map((el, index) => (
          <MatchItem key={index} data={el} />
        ))}
      </styles.Container>
      <MatchInfo show={state.openedMatch} close={state.openModal} />
    </MatchContext.Provider>
  );
});
