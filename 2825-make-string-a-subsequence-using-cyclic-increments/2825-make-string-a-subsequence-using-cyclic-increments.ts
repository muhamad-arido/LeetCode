function canMakeSubsequence(str1: string, str2: string): boolean {
  let result: number = 0;

  function cyclicIncrement(char: string) {
    return char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1);
  }

  for (let index = 0; index < str1.length; index++) {
    if (
      str1[index] === str2[result] ||
      cyclicIncrement(str1[index]) === str2[result]
    ) {
      result++;
    }
  }

  return result === str2.length;
};