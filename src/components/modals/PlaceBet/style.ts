import styled from "styled-components";

export const PlaceForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const MatchNumber = styled.span`
  font-size: 12px;

  text-transform: uppercase;

  color: #1f2041;
`;

export const Number = styled(MatchNumber)`
  color: rgba(31, 32, 65, 0.75); ;
`;

export const InfoRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
