function getHappyString(n: number, k: number): string {
  if (k > 3 * 2 ** (n - 1)) return "";

  const chars = ["a", "b", "c"];
  let prevChar: string = "";
  let result: string = "";

  k--;

  for (let i = 0; i < n; i++) {
    const groupSize = 1 << (n - 1 - i);
    let index = Math.floor(k / groupSize);

    k %= groupSize;

    for (let char of chars) {
      if (char !== prevChar) {
        if (index === 0) {
          result += char;
          prevChar = char;
          break;
        }
        index--;
      }
    }
  }

  return result;
};