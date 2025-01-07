function stringMatching(words: string[]): string[] {
  const res: string[] = [];

  for (let index = 0; index < words.length; index++) {
    for (let j = 0; j < words.length; j++) {
      if (j !== index && !res.includes(words[index])) {
        if (words[j].includes(words[index])) res.push(words[index]);
      }
    }
  }

  return res;
}