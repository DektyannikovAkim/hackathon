import styled from "styled-components";
import { Content } from "../style";

export const Container = styled.div`
  height: 145px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;

export const BetContainer = styled(Content)`
  padding: 15px;
  border-bottom: 1px solid gray;
`;
