function removeOccurrences(s: string, part: string): string {
  while (s.includes(part)) s = s.replaceAll(part, "");

  return s;
}