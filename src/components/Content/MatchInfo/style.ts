import styled from "styled-components";

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  & > div:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
