function maxCount(banned: number[], n: number, maxSum: number): number {
  const forbiddenNumbers: Set<number> = new Set(banned);
  let count: number = 0;

  for (let i = 1, currentSum = 0; i <= n && currentSum + i <= maxSum; i++) {
    if (!forbiddenNumbers.has(i)) {
      currentSum += i;
      count++;
    }
  }

  return count;
}