function minimumLength(s: string): number {
  const frequency: Record<string, number> = {};

  for (const char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let minLength = 0;

  for (const count of Object.values(frequency)) {
    if (count % 2 === 1) {
      minLength += 1;
    } else {
      minLength += 2;
    }
  }

  return minLength;
}