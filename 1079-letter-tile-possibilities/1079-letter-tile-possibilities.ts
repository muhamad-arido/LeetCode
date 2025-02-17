function numTilePossibilities(tiles: string): number {
  const count: Record<string, number> = {};

  for (const char of tiles) {
    count[char] = (count[char] || 0) + 1;
  }

  const keys = Object.keys(count);

  function backtrack(): number {
    let sum = 0;

    for (const key of keys) {
      if (count[key] === 0) continue;

      sum++;
      count[key]--;
      sum += backtrack();
      count[key]++;
    }

    return sum;
  }

  return backtrack();
};