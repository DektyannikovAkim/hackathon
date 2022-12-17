import styled from "styled-components";

export const BaseButton = styled.button`
  outline: none;
  border: none;

  padding: 10px 15px;

  border-radius: 6px;

  font-weight: 700;
  font-size: 12px;

  color: #ffffff;

  cursor: pointer;
`;

export const AddButton = styled(BaseButton)`
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ViewButtton = styled(BaseButton)`
  background: inherit;
  color: #bc9cff;
  border: 1px solid currentColor;
`;

export const PanelContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

export const Container = styled.div`
  height: max-content;
  width: 100%;
  max-width: 1700px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const PanelTitle = styled.h5`
  font-weight: 700;
  font-size: 16px;
  margin: 0px;
  color: #1f2041;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;

  background: rgba(46, 46, 46, 0.13);
  backdrop-filter: blur(5px);
`;

export const InfoString = styled.span`
  font-weight: 400;
  font-size: 14px;

  color: rgba(31, 32, 65, 0.75);
`;
