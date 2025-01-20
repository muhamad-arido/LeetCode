function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const rows = mat.length;
  const cols = mat[0].length;

  const positionMap: Map<number, [number, number]> = new Map();
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      positionMap.set(mat[r][c], [r, c]);
    }
  }

  const rowPainted = new Array(rows).fill(0);
  const colPainted = new Array(cols).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    const [row, col] = positionMap.get(num)!;

    rowPainted[row]++;
    colPainted[col]++;

    if (rowPainted[row] === cols || colPainted[col] === rows) {
      return i;
    }
  }

  return -1;
}