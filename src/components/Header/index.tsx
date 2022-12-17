import React from "react";
import Icons from "../../icons/Icons";
import { AddButton } from "../shared/shared";
import * as styles from "./style";

export const Header = () => {
  return (
    <styles.Container>
      <styles.WrapperLogo>{Icons.logo()}BET MAGICIANS</styles.WrapperLogo>
      <styles.WrapperWallet>
        <styles.Adress>Wallet adress: </styles.Adress>
        <AddButton>place a bet</AddButton>
      </styles.WrapperWallet>
    </styles.Container>
  );
};
