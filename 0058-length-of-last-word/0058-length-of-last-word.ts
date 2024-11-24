function lengthOfLastWord(s: string): number | undefined {
  return s
    .split(" ")
    .filter((v) => v !== "")
    .pop()?.length;
}