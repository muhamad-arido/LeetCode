function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const C: number[] = [];
  const setA: Set<number> = new Set();
  const setB: Set<number> = new Set();

  for (let index = 0; index < A.length; index++) {
    setA.add(A[index]);
    setB.add(B[index]);

    const intersection = [...setA].filter((v) => setB.has(v));

    C.push(intersection.length);
  }

  return C;
}