import styled from "styled-components";

export const PlaceForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 20px;
  }
`;

export const TeamWrapper = styled.div`
  display: flex;

  & > div:not(:last-of-type) {
    margin-right: 15px;
  }

  & > span:not(:last-of-type) {
    margin-right: 62px;
  }
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
