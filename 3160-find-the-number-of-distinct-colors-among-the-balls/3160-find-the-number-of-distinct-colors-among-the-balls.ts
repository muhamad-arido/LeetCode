function queryResults(limit: number, queries: number[][]): number[] {
  const res = new Array(queries.length).fill(0);
  const ball = new Map<number, number>();
  const color = new Map<number, number>();

  let i: number = 0;
  for (const [x, y] of queries) {
    if (ball.has(x)) {
      const prevColor = ball.get(x)!;
      color.set(prevColor, (color.get(prevColor) || 0) - 1);
      if (color.get(prevColor) === 0) {
        color.delete(prevColor);
      }
    }

    ball.set(x, y);
    color.set(y, (color.get(y) || 0) + 1);

    res[i] = color.size;
    i++;
  }

  return res;
}