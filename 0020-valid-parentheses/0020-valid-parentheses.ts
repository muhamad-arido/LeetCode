function isValid(s: string): boolean {
  const isOpening = (value: string) => "([{".includes(value);
  const isPair = (value: string) =>
    value === "()" || value === "[]" || value === "{}";

  if (s.length % 2) return false;
  if ([...s].every((value) => isOpening(value))) return false;

  const res: Array<string> = [];

  const valid: Array<boolean> = [...s].map((value) => {
    if (isOpening(value)) {
      res.push(value);
      return true;
    }
    if (isPair(res.at(-1) + value)) {
      res.pop();
      return true;
    }
    return false;
  });

  return valid.every((value) => value) && res.length === 0;
}