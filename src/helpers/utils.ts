export const shortString = (str: string, start: number, end: number) => {
  if (!str) return "";

  let subString = str.slice(start, end);

  return str.replace(subString, "...");
};

export const getStatusMatch = (
  team0: string,
  team1: string,
  status: number
) => {
  switch (status) {
    case 0:
      return "in the process";

    case 1:
      return `${team0} win`;

    case 2:
      return `${team1} lose`;

    case 3:
      return "teams tied";
  }

  return "in the process";
};

export const getTime = (finishTimestamp: number) => {
  return new Date(finishTimestamp * 1000).toLocaleDateString();
};
