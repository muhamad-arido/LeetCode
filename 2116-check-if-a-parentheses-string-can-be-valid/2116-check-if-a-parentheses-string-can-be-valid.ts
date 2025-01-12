function canBeValid(s: string, locked: string): boolean {
  if (s.length % 2 !== 0) return false;

  let openCount = 0;
  let closeCount = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(" || locked[index] === "0") {
      openCount++;
    } else {
      closeCount++;
    }

    if (closeCount > openCount) return false;
  }

  openCount = 0;
  closeCount = 0;

  for (let index = s.length - 1; index >= 0; index--) {
    if (s[index] === ")" || locked[index] === "0") {
      closeCount++;
    } else {
      openCount++;
    }

    if (openCount > closeCount) return false;
  }

  return true;
}