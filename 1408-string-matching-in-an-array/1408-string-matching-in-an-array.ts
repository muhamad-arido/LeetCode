function stringMatching(words: string[]): string[] {
  const res: Set<string> = new Set();

  for (let index = 0; index < words.length; index++) {
    for (let j = 0; j < words.length; j++) {
      if (j !== index && !res.has(words[index])) {
        if (words[j].includes(words[index])) res.add(words[index]);
      }
    }
  }

  return [...res];
}