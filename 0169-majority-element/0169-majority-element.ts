function majorityElement(nums: number[]): number {
  let candidate: number | null = null;
  let count: number = 0;

  for (let index = 0; index < nums.length; index++) {
    if (count === 0) candidate = nums[index];
    candidate === nums[index] ? count++ : count--;
  }

  return candidate as number;
}