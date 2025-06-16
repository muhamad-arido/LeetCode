function maximumDifference(nums: number[]): number {
  let result: number = -1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j > i && nums[i] < nums[j] && nums[j] - nums[i] > result) {
        result = nums[j] - nums[i];
      }
    }
  }

  return result;
};