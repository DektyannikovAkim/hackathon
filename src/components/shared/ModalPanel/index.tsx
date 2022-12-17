import React from "react";
import * as styles from "./style";

export interface ModalProps {
  label: string;
  children: JSX.Element | JSX.Element[];
  show: boolean;
  close: (bool: boolean) => void;
  style?: React.CSSProperties;
}

export const ModalPanel = ({
  label,
  children,
  show,
  close,
  ...props
}: ModalProps) => {
  return (
    <>
      {show ? (
        <styles.Container>
          <styles.Panel {...props}>
            <styles.CloseWrapper>
              <styles.Close onClick={() => close(false)} />
            </styles.CloseWrapper>

            <styles.Title>{label}</styles.Title>

            <styles.Content>{children}</styles.Content>
          </styles.Panel>
        </styles.Container>
      ) : (
        <></>
      )}
    </>
  );
};
