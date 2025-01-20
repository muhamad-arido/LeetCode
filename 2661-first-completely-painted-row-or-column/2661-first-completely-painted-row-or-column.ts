function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const row: Map<number, number[]> = new Map();
  const col: Map<number, number[]> = new Map();
  const getIndex = ((): (() => number) => {
    let index = 1;
    return () => index++;
  })();

  for (let i = 0; i < mat.length; i++) {
    const colStack = [];
    const rowStack = [];
    for (let j = 0; j < mat[i].length; j++) {
      rowStack.push(mat[i][j]);
      colStack.push(mat[j][i]);

      row.set(i + 1, rowStack);
      const index = getIndex();

      if (
        row.get(i + 1)?.length === mat[j].length ||
        col.get(i + 1)?.length === mat[j].length
      ) {
        return index;
      }
    }

    col.set(i + 1, colStack);
  }

  return -1;
}