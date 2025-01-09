function prefixCount(words: string[], pref: string): number {
  let res: number = 0;

  for (const word of words) {
    if (word.startsWith(pref)) res++;
  }

  return res;
}