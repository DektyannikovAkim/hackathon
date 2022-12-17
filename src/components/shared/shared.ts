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
  border-radius: ${({ theme }) => theme.radii["4px"]};
  box-shadow: ${({ theme }) => theme.shadows.dashboard};
  background: ${({ theme }) => theme.bgSettingsPnl};
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
  color: ${({ theme }) => theme.bigHeader};
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
