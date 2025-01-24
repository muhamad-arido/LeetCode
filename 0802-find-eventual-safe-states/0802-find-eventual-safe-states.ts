function eventualSafeNodes(graph: number[][]): number[] {
  const dfs = (node: number, onPath: boolean[], visited: boolean[]) => {
    if (onPath[node]) return true;
    if (visited[node]) return false;

    onPath[node] = true;
    visited[node] = true;

    for (const neightbor of graph[node]) {
      if (dfs(neightbor, onPath, visited)) return true;
    }

    onPath[node] = false;
    return false;
  };

  const onPath = new Array(graph.length).fill(false);
  const visited = new Array(graph.length).fill(false);
  const res: number[] = [];

  for (let index = 0; index < graph.length; index++) {
    if (!dfs(index, onPath, visited)) res.push(index);
  }

  return res;
}