function findRedundantConnection(edges: number[][]): number[] {
  const parent = Array.from({ length: edges.length + 1 }, (_, i) => i);
  const rank = new Array(edges.length + 1).fill(1);

  const find = (x: number): number => {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x]));
  };

  const union = (x: number, y: number): boolean => {
    let rootX = find(x);
    let rootY = find(y);

    if (rootX === rootY) return false;

    if (rank[rootX] > rank[rootY]) {
      parent[rootY] = rootX;
    } else if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
    } else {
      parent[rootY] = rootX;
      rank[rootX]++;
    }

    return true;
  };

  for (const [u, v] of edges) {
    if (!union(u, v)) {
      return [u, v];
    }
  }

  return [];
}