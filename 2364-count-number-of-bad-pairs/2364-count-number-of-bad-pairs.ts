function countBadPairs(nums: number[]): number {
  const n = nums.length;
  const freq = new Map<number, number>();
  let goodPairs = 0;

  for (let i = 0; i < n; i++) {
    let key = nums[i] - i;
    if (freq.has(key)) {
      goodPairs += freq.get(key)!;
      freq.set(key, freq.get(key)! + 1);
    } else {
      freq.set(key, 1);
    }
  }

  let totalPairs = (n * (n - 1)) / 2;
  return totalPairs - goodPairs;
};