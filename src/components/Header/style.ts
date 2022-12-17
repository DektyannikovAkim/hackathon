import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;

  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);

  padding: 15px 65px;
`;

export const WrapperLogo = styled.div`
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;

export const WrapperWallet = styled.div`
  display: flex;
  align-items: center;

  gap: 45px;
`;

export const Wallet = styled.span`
  color: #1f2041;
`;

export const Adress = styled.span`
  color: rgba(31, 32, 65, 0.75);
`;
