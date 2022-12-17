import React from "react";
import { MatchContext } from "../../../context/match";
import { useLateInitContext } from "../../../hooks/useLateInitContext";
import { Match } from "../../../modules";
import * as styles from "./style";

interface MatchProps {
  data: Match;
}

export const MatchItem = ({ data }: MatchProps) => {
  const state = useLateInitContext(MatchContext);

  return (
    <styles.Container
      status={data.result}
      onClick={() => {
        state.openModal(true);
        state.setCurrentMatch(data);
      }}
    >
      Match: {`${data.team0} vs ${data.team1}`}
    </styles.Container>
  );
};
