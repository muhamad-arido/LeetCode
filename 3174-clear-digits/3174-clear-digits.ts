function clearDigits(s: string): string {
  const res: string[] = [];

  for (const char of s) {
    if (!isNaN(+char)) {
      if (res.length > 0) res.pop();
    } else {
      res.push(char);
    }
  }

  return res.join("");
}
