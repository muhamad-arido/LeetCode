function canChange(start: string, target: string): boolean {
  if (start.replaceAll("_", "") !== target.replaceAll("_", "")) return false;

  for (let i = 0, j = 0; i < start.length || j < target.length; i++, j++) {
    while (i < start.length && start[i] === "_") i++;
    while (j < target.length && target[j] === "_") j++;

    if (i === start.length && j === target.length) return true;
    if (i === start.length || j === target.length) return false;
    if (start[i] !== target[j]) return false;
    if (start[i] === "L" && i < j) return false;
    if (start[i] === "R" && i > j) return false;
  }

  return true;
};