import React from "react";
import { Input } from "../../shared/Forms/Input";
import { ModalPanel } from "../../shared/ModalPanel";
import { AddButton, InfoString, ViewButtton } from "../../shared/shared";
import * as styles from "./style";

export interface PanelProps {
  show: boolean;
  close: (bool: boolean) => void;
}

export const PlaceBet = ({ show, close }: PanelProps) => {
  return (
    <ModalPanel label="Bet" show={show} close={close}>
      <styles.PlaceForm>
        <styles.MatchNumber>
          match number: <styles.Number>1234</styles.Number>
        </styles.MatchNumber>
        <Input />

        <styles.InfoRow>
          <InfoString>Match odds:</InfoString> <InfoString></InfoString>
        </styles.InfoRow>

        <ViewButtton>calculate coefficient</ViewButtton>

        <AddButton>place a bet +</AddButton>
      </styles.PlaceForm>
    </ModalPanel>
  );
};
