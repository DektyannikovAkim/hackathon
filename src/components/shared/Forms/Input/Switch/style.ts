import styled from "styled-components";

export const WrapperForRadio = styled.div`
  display: flex;
  align-items: center;
`;

export const TextLabel = styled.label`
  margin-right: 5px;
  color: gray;
  cursor: pointer;
`;

export const LabelForRadio = styled.label`
  width: 20px;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid;
  border-color: #767676;
  border-radius: 100%;
  color: #fff;
`;

export const Round = styled.div`
  display: none;
  width: 10px;
  height: 10px;
  background: #bc9cff;
  border-radius: 100%;
  transition: all 0.1s;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  position: absolute;
  z-index: -1;
  opacity: 0;

  :checked + ${LabelForRadio} {
    border: 2px solid #0354ce;
    border-color: #bc9cff;
  }

  :checked + ${LabelForRadio} > div {
    display: block;
  }
`;
