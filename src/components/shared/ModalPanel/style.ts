import styled from "styled-components";

import {
  BaseButton,
  ModalBackground,
  PanelContainer,
  PanelTitle,
} from "../shared";

export const Container = styled(ModalBackground)``;

export const Panel = styled(PanelContainer)`
  padding: 46px;
  width: 573px;

  @media screen and (max-width: 450px) {
    width: calc(100% - 20px);
  }
`;

export const CloseWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 25px;
  top: 25px;
`;

export const Close = styled(BaseButton)`
  position: relative;
  width: 15px;
  height: 15px;
  background: inherit;

  ::before,
  ::after {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    top: 5px;
    left: -0.5px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    border-color: #767676;
  }

  ::before {
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  ::after {
    left: 8px;
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  :active {
    box-shadow: none;
  }
`;

export const Title = styled(PanelTitle)`
  margin-bottom: 34px;

  @media screen and (max-width: 450px) {
    margin-bottom: 14px;
  }
`;

export const Content = styled.div`
  display: flex;
`;
