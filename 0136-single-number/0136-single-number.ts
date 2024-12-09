function singleNumber(nums: number[]): number {
  let result: number = 0;

  for (let index = 0; index < nums.length; index++) {
    result = result ^ nums[index];
  }

  return result;
}