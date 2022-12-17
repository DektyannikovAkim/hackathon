export const getEthereum = () => {
  const { ethereum }: any = window;

  return ethereum;
};

export const getAdress = () => {
  const { ethereum }: any = window;

  return ethereum.selectedAddress;
};
