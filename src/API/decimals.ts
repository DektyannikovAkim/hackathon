import { BigNumber } from "ethers";

export function removeTrailingZeros(str: string): string {
  if (str === "0") return str;
  if (str.slice(-1) === "0")
    return removeTrailingZeros(str.substr(0, str.length - 1));
  if (str.slice(-1) === ".") return str.substr(0, str.length - 1);
  return str;
}

export function BNToNumstr(bn: BigNumber | string, dec = 18, prec = 3): string {
  const str = bn.toString();
  if (str === "0") return str;
  if (isNaN(Number(str))) return "NaN";
  if (str.length <= dec)
    return removeTrailingZeros(
      ("0." + "000000000000000000".substr(0, dec - str.length) + str).substr(
        0,
        dec - str.length + prec + 2
      )
    );
  else
    return removeTrailingZeros(
      [str.substr(0, str.length - dec), str.slice(-dec)]
        .join(".")
        .substr(0, str.length - dec + prec + 1)
    );
}
export function BNToNumstrStrict(
  bn: BigNumber | string,
  dec = 18,
  prec = 3
): string {
  const str = bn.toString();
  if (str === "0") return str;
  if (isNaN(Number(str))) return "NaN";
  if (str.length <= dec)
    return removeTrailingZeros(
      ("0." + "000000000000000000".substr(0, dec - str.length) + str).substr(
        0,
        dec - str.length + prec + 2
      )
    );
  else
    return [str.substr(0, str.length - dec), str.slice(-dec)]
      .join(".")
      .substr(0, str.length - dec + prec + 1);
}
