function isIsomorphic(s: string, t: string): boolean {
  const char1 = new Map<string, string>();
  const char2 = new Map<string, string>();

  for (let index = 0; index < s.length; index++) {
    if (!char1.has(s[index])) char1.set(s[index], t[index]);
    if (!char2.has(t[index])) char2.set(t[index], s[index]);

    if (char1.get(s[index]) !== t[index] || char2.get(t[index]) !== s[index]) {
      return false;
    }
  }

  return true;
};