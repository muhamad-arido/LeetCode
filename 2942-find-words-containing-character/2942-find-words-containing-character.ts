function findWordsContaining(words: string[], x: string): number[] {
  const result: number[] = [];

  for (let index = 0; index < words.length; index++) {
    if (words[index].includes(x)) result.push(index);
  }

  return result;
};