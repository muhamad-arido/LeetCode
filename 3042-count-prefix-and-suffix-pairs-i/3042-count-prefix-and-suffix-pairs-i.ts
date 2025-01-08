function countPrefixSuffixPairs(words: string[]): number {
  let res: number = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      if (
        j !== i &&
        words[j].startsWith(words[i]) &&
        words[j].endsWith(words[i])
      )
        res++;
    }
  }

  return res;
}