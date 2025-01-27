function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][]
): boolean[] {
  const graph: Map<number, number[]> = new Map();
  const reachable: Map<number, Set<number>> = new Map();

  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
  }
  for (const [u, v] of prerequisites) {
    graph.get(u)!.push(v);
  }

  const dfs = (u: number): Set<number> => {
    if (reachable.has(u)) return reachable.get(u)!;

    const seen = new Set<number>();

    for (const neighbor of graph.get(u)!) {
      seen.add(neighbor);

      const subResult = dfs(neighbor);

      for (const course of subResult) {
        seen.add(course);
      }
    }
    reachable.set(u, seen);

    return seen;
  };

  for (let i = 0; i < numCourses; i++) {
    dfs(i);
  }

  return queries.map(([u, v]) => reachable.get(u)?.has(v) || false);
}