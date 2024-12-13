function findScore(nums: number[]): number {
  const marked: Set<number> = new Set();
  let score: number = 0;

  const sorted: number[][] = nums
    .map((value, index) => [value, index] as [number, number])
    .sort((a, b) => a[0] - b[0]);

  for (const [value, index] of sorted) {
    if (marked.has(index)) continue;

    score += value;
    marked.add(index);
    if (index > 0) marked.add(index - 1);
    if (index < nums.length - 1) marked.add(index + 1);
  }

  return score;
}