import { observer } from "mobx-react-lite";
import React, { useEffect, useMemo } from "react";
import { isMetaMaskInstalled, onClickConnect } from "../../API/connect";
import { shortString } from "../../helpers/utils";
import Icons from "../../icons/Icons";
import UserStore from "../../state/userState";
import { AddButton } from "../shared/shared";
import * as styles from "./style";

export const Header = observer(() => {
  const connected = isMetaMaskInstalled();

  const state = useMemo(() => new UserStore(), []);

  useEffect(() => {
    state.getAdressWallet();
  }, [state]);

  return (
    <styles.Container>
      <styles.WrapperLogo>{Icons.logo()}BET MAGICIANS</styles.WrapperLogo>
      <styles.WrapperWallet>
        <styles.Wallet>
          Wallet adress:{" "}
          <styles.Adress>
            {connected
              ? `${shortString(state.adress, 5, state.adress.length - 4)}`
              : `wallet not connected`}
          </styles.Adress>
        </styles.Wallet>

        {connected ? (
          <></>
        ) : (
          <AddButton onClick={() => onClickConnect()}>connect wallet</AddButton>
        )}
      </styles.WrapperWallet>
    </styles.Container>
  );
});
