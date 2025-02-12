function maximumSum(nums: number[]): number {
  const pairs = new Map<number, number[]>();
  let res: number = -1;

  for (const num of nums) {
    const sum = num
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    if (!pairs.has(sum)) {
      pairs.set(sum, [num]);
    } else {
      let arr = pairs.get(sum)!;
      arr.push(num);
      arr.sort((a, b) => b - a);
      if (arr.length > 2) arr.pop();
      pairs.set(sum, arr);
    }

    if (pairs.get(sum)!.length === 2) {
      res = Math.max(res, pairs.get(sum)![0] + pairs.get(sum)![1]);
    }
  }

  return res;
}