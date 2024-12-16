function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  for (let index = 0; index < k; index++) {
    const minNum: Array<number> = nums.reduce<[number, number]>(
      (min, v, i) => {
        return v < min[0] ? [v, i] : min;
      },
      [nums[0], 0]
    );

    nums[minNum[1]] = minNum[0] * multiplier;
  }

  return nums;
};