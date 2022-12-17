import React from "react";
import { BetInfo } from "../../../modules";
import * as styles from "./style";

interface MatchProps {
  data: BetInfo;
}

export const MatchItem = ({ data }: MatchProps) => {
  return (
    <styles.Container status={data.result}>
      Match: {data.matchId}
    </styles.Container>
  );
};
