function strStr(haystack: string, needle: string): number | undefined {
  if (!haystack.includes(needle)) return -1;

  return haystack.match(needle)?.index;
}