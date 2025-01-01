function maxScore(s: string): number {
  let totalOnes = 0;
  for (const char of s) {
    if (char === "1") totalOnes++;
  }

  let maxScore = 0;
  let leftZeros = 0;
  let rightOnes = totalOnes;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      leftZeros++;
    } else if (s[i] === "1") {
      rightOnes--;
    }

    const currentScore = leftZeros + rightOnes;
    maxScore = Math.max(maxScore, currentScore);
  }

  return maxScore;
}