function maxChunksToSorted(arr: number[]): number {
  let max = -Infinity;
  let count = 0;

  for (let index = 0; index < arr.length; index++) {
    max = Math.max(max, arr[index]);

    if (max === index) count++;
  }

  return count;
};