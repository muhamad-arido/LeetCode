function findMaxFish(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  let maxFish = 0;

  function dfs(r: number, c: number): number {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
      return 0;
    }

    let fish = grid[r][c];
    grid[r][c] = 0;

    fish += dfs(r + 1, c);
    fish += dfs(r - 1, c);
    fish += dfs(r, c + 1);
    fish += dfs(r, c - 1);

    return fish;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c]) {
        maxFish = Math.max(maxFish, dfs(r, c));
      }
    }
  }

  return maxFish;
}