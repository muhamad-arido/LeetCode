function generate(numRows: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        const value: number = result[i - 1][j - 1] + result[i - 1][j];
        row.push(value);
      }
    }
    result.push(row);
  }
  return result;
};