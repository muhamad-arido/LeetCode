function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true;

  const diffs: number[] = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diffs.push(i);
      if (diffs.length > 2) return false;
    }
  }

  console.log(diffs)

  return (
    diffs.length === 2 &&
    s1[diffs[0]] === s2[diffs[1]] &&
    s1[diffs[1]] === s2[diffs[0]]
  );
};