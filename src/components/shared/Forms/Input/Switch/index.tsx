import { observer } from "mobx-react-lite";
import { nanoid } from "nanoid";
import React, { useMemo } from "react";
import * as styles from "./style";

interface Props {
  label?: string | number;
  name?: string | undefined;
  value: string | number;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export const Switch = observer(
  ({ label, name = "SwitchToggle", value, checked, ...props }: Props) => {
    const id = useMemo(() => nanoid(), []);

    return (
      <styles.WrapperForRadio>
        <styles.TextLabel
          htmlFor={id}
          style={{ color: checked ? "#166CE2" : "#767676" }}
        >
          <span>{label}</span>
        </styles.TextLabel>

        <styles.RadioButton
          id={id}
          name={name}
          value={value}
          checked={checked}
          {...props}
        />
        <styles.LabelForRadio htmlFor={id} title={String(label)}>
          <styles.Round />
        </styles.LabelForRadio>
      </styles.WrapperForRadio>
    );
  }
);
