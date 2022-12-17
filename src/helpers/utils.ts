export const shortString = (str: string, start: number, end: number) => {
  if (!str) return "";

  let subString = str.slice(start, end);

  return str.replace(subString, "...");
};
