import styled, { css } from "styled-components";

export interface StyledInputProps {
  error: boolean;
}

export const InputWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  white-space: nowrap;
`;

export const Label = styled.label<StyledLabelProps>`
  cursor: pointer;

  color: #1f2041;

  ${({ error }) => {
    if (error) {
      return css`
        color: red;
      `;
    }
  }}
`;

export const InputLabel = styled(Label)`
  margin-bottom: 6px;
`;

export type StyledLabelProps = {
  error: boolean;
};

export const Input = styled.input<StyledInputProps>`
  width: 100%;
  height: 44px;

  padding: 9px 13px;

  font-size: 1em;
  outline: none;
  border: none;
  border-radius: 4px;

  background-color: #efefef;

  box-shadow: ${({ error }) => (error ? `0 0 0 1px red` : "none")};

  color: ${({ theme, readOnly }) => {
    if (readOnly) return theme.disableInputColor;

    return theme.inputTextColor;
  }};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  :focus {
    box-shadow: ${({ theme: { errorLabelColor, inputBorderColor }, error }) =>
      `0 0 0 1px ${error ? errorLabelColor : inputBorderColor}`};
  }
`;
