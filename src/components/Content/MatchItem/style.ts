import styled from "styled-components";

interface Props {
  status: 0 | 1 | 2 | 3;
}

export const Container = styled.div<Props>`
  width: 353px;
  height: 81px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ status }) =>
    status ? "rgba(188, 156, 255, 0.3)" : "#eff4e9"};
  border: 2px solid;
  border-color: ${({ status }) => (status ? "#BC9CFF" : "#81cf1d")};
  border-radius: 6px;

  color: #1f2041;
  cursor: pointer;
`;
