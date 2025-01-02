function vowelStrings(words: string[], queries: number[][]): number[] {
  if (words.length === 0 || queries.length === 0) return [];

  const vowels = new Set<string>(["a", "e", "i", "o", "u"]);
  const isVowel = (char: string): boolean => vowels.has(char);
  const isVowelString: Array<boolean> = words.map(
    (e) => isVowel(e[0]) && isVowel(e[e.length - 1])
  );
  const prefixSum: Array<number> = Array(isVowelString.length).fill(0);
  const result: Array<number> = [];

  for (let index = 0; index < isVowelString.length; index++) {
    prefixSum[index] =
      (index === 0 ? 0 : prefixSum[index - 1]) + (isVowelString[index] ? 1 : 0);
  }

  for (const [li, ri] of queries) {
    const total = prefixSum[ri] - (li === 0 ? 0 : prefixSum[li - 1]);
    result.push(total);
  }

  return result;
}