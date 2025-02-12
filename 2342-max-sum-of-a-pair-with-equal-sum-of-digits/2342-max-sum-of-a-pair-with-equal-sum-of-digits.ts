function maximumSum(nums: number[]): number {
  const pairs = new Map<number, number>();
  let res: number = -1;

  for (const num of nums) {
    const sum = num
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    if (!pairs.has(sum)) pairs.set(sum, num);
    else pairs.set(sum, pairs.get(sum)! + num);

    if (!nums.includes(pairs.get(sum)!)) res = Math.max(res, pairs.get(sum)!);
  }

  return res;
}