function searchInsert(nums: number[], target: number): number {
  if (nums.includes(target)) {
    return nums.findIndex((v) => v === target);
  }

  nums.push(target);

  return nums.sort().findIndex((v) => v === target);
};