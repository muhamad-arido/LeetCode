function gridGame(grid: number[][]): number {
  const calcPrefixSum = (arr: number[]): number[] => {
    const prefixSum = Array(arr.length).fill(0);
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
      prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    return prefixSum;
  };

  const row1 = calcPrefixSum(grid[0]);
  const row2 = calcPrefixSum(grid[1]);
  const n = grid[0].length;
  let res = Infinity;

  for (let i = 0; i < n; i++) {
    const topRemaining = row1[n - 1] - row1[i];
    const bottomRemaining = i > 0 ? row2[i - 1] : 0;

    const playerTwoMax = Math.max(topRemaining, bottomRemaining);
    res = Math.min(res, playerTwoMax);
  }

  return res;
}