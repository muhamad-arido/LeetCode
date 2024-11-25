function climbStairs(n: number): number {
  const ways: { [step: number]: number } = {};
  const sumStep = (n: number): number => {
    if (n == 1) return n;
    if (n == 2) return n;
    if (n in ways) return ways[n];

    return (ways[n] = sumStep(n - 1) + sumStep(n - 2));
  };

  return sumStep(n);
}