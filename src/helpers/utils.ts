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

export function formatString(
  num: string,
  decimals = 18,
  precision = decimals,
  sagn = false,
  delimiter = "."
): string {
  if (decimals === 0) return num;
  num = num.padStart(decimals + 1, "0");

  const intPart = num.slice(0, -decimals).replace(/^0+/, "");
  if (precision === 0) return intPart ? intPart : "0";
  if (!intPart && sagn) {
    const zeroAmount = Array.from(num.slice(-decimals)).findIndex(
      (value, index, obj) => obj[index + 1] != "0"
    );
    precision += zeroAmount + 1;
  }
  const fracPart = num.slice(-decimals).slice(0, precision).replace(/0+$/, "");

  return (
    (intPart ? intPart : "0") +
    (fracPart.length > 0 ? delimiter + fracPart : "")
  );
}
