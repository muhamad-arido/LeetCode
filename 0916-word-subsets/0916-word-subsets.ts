function wordSubsets(words1: string[], words2: string[]): string[] {
  const maxFreq = Array(26).fill(0);

  for (const word of words2) {
    const freq = Array(26).fill(0);
    for (const char of word) {
      freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
      maxFreq[i] = Math.max(maxFreq[i], freq[i]);
    }
  }

  const result = [];
  for (const word of words1) {
    const freq = Array(26).fill(0);
    for (const char of word) {
      freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let isUniversal = true;
    for (let i = 0; i < 26; i++) {
      if (freq[i] < maxFreq[i]) {
        isUniversal = false;
        break;
      }
    }
    if (isUniversal) result.push(word);
  }

  return result;
}