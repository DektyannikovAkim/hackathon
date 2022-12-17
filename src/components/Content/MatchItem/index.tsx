import React from "react";
import * as styles from "./style";

interface MatchProps {
  matchName: number;
}

export const MatchItem = ({ matchName }: MatchProps) => {
  return <styles.Container>Match № {matchName}</styles.Container>;
};
