function continuousSubarrays(nums: number[]): number {
  let invalid = 0;
  let result = 0;
  const maxDeque: number[] = [];
  const minDeque: number[] = [];

  for (let current = 0; current < nums.length; current++) {
    while (
      maxDeque.length > 0 &&
      nums[maxDeque[maxDeque.length - 1]] <= nums[current]
    ) {
      maxDeque.pop();
    }
    maxDeque.push(current);

    while (
      minDeque.length > 0 &&
      nums[minDeque[minDeque.length - 1]] >= nums[current]
    ) {
      minDeque.pop();
    }
    minDeque.push(current);

    while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
      invalid++;
      if (maxDeque[0] < invalid) maxDeque.shift();
      if (minDeque[0] < invalid) minDeque.shift();
    }

    result += current - invalid + 1;
  }

  return result;
};