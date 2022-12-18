import React from "react";
import { observer } from "mobx-react-lite";
import { ModalPanel } from "../../shared/ModalPanel";
import { PanelProps, PlaceBet } from "../../modals/PlaceBet";
import * as styles from "./style";
import { useLateInitContext } from "../../../hooks/useLateInitContext";
import { MatchContext } from "../../../context/match";
import { getStatusMatch, getTime } from "../../../helpers/utils";
import { AddButton } from "../../shared/shared";
import { Bets } from "./Bets";

export const MatchInfo = observer(({ show, close }: PanelProps) => {
  const state = useLateInitContext(MatchContext);

  return (
    <ModalPanel label="MatchInfo" show={show} close={close}>
      <styles.Content>
        <styles.Row>
          <span>Teams</span>
          <span>{`${state.currentMatch?.team0} vs ${state.currentMatch?.team1}`}</span>
        </styles.Row>
        <styles.Row>
          <span>Status</span>
          <span>
            {getStatusMatch(
              String(state.currentMatch?.team0),
              String(state.currentMatch?.team1),
              state.currentMatch?.result || 0
            )}
          </span>
        </styles.Row>
        {state.currentMatch?.result ? (
          <styles.Row>
            <span>Match end time:</span>
            <span>{getTime(state.currentMatch.finishTimestamp)}</span>
          </styles.Row>
        ) : (
          <></>
        )}
        <styles.Row></styles.Row>
        <styles.Row></styles.Row>

        <Bets />

        {!state.currentMatch?.result ? (
          <AddButton onClick={() => state.openBet(true)}>
            place a bet +
          </AddButton>
        ) : (
          <></>
        )}
      </styles.Content>
      <PlaceBet show={state.openedBet} close={state.openBet} />
    </ModalPanel>
  );
});
