function isPrefixOfWord(sentence: string, searchWord: string): number {
  const index: number = sentence
    .split(" ")
    .findIndex((value) => value.startsWith(searchWord));

  console.log(index);
  return index >= 0 ? index + 1 : -1;
};