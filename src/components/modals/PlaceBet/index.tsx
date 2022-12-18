import { observer } from "mobx-react-lite";
import React from "react";
import { Input } from "../../shared/Forms/Input";
import { Switch } from "../../shared/Forms/Input/Switch";
import { ModalPanel } from "../../shared/ModalPanel";
import { AddButton, InfoString } from "../../shared/shared";
import * as styles from "./style";

export interface PanelProps {
  show: boolean;
  close: (bool: boolean) => void;
}

export const PlaceBet = observer(({ show, close }: PanelProps) => {
  return (
    <ModalPanel label="Bet" show={show} close={close}>
      <styles.PlaceForm>
        <styles.InfoRow>
          <InfoString>match result:</InfoString>{" "}
          <styles.TeamWrapper>
            <Switch
              label={"Team1"}
              value={"Team1"}
              checked={true}
              onChange={() => {}}
              onClick={() => {}}
            />
            <Switch
              label={"Tie"}
              value={"Tie"}
              checked={false}
              onChange={() => {}}
              onClick={() => {}}
            />
            <Switch
              label={"Team2"}
              value={"Team2"}
              checked={false}
              onChange={() => {}}
              onClick={() => {}}
            />
          </styles.TeamWrapper>
        </styles.InfoRow>
        <styles.InfoRow>
          <InfoString>Match odds:</InfoString>{" "}
          <styles.TeamWrapper>
            <InfoString>0.73</InfoString>
            <InfoString>0.03</InfoString>
            <InfoString>0.12</InfoString>
          </styles.TeamWrapper>
        </styles.InfoRow>

        <span></span>

        <Input label="BET" />

        <AddButton>place a bet +</AddButton>
      </styles.PlaceForm>
    </ModalPanel>
  );
});
