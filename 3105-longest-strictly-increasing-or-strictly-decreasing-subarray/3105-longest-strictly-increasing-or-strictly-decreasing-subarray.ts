function longestMonotonicSubarray(nums: number[]): number {
  if (nums.length === 0) return 0;

  let longestSub = 1;
  let incLen = 1;
  let decLen = 1;

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] > nums[index - 1]) {
      incLen += 1;
      decLen = 1;
    } else if (nums[index] < nums[index - 1]) {
      decLen += 1;
      incLen = 1;
    } else {
      incLen = 1;
      decLen = 1;
    }

    longestSub = Math.max(longestSub, incLen, decLen);
  }

  return longestSub;
}