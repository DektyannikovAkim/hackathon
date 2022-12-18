import { nanoid } from "nanoid";
import React, { useMemo } from "react";
import * as styles from "./style";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: boolean;
}

export const Input = ({ label, error = false, ...props }: InputProps) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <styles.InputWrapper>
      {label ? (
        <styles.InputLabel htmlFor={id} error={error}>
          {label}
        </styles.InputLabel>
      ) : (
        <></>
      )}
      <styles.Input id={id} error={error} {...props} />
    </styles.InputWrapper>
  );
};
