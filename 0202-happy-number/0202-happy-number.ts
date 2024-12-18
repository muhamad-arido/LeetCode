function isHappy(n: number): boolean {
  const seen = new Set<number>();
  let res = n;

  while (res !== 1) {
    if (seen.has(res)) return false;
    seen.add(res);

    let sum = 0;
    while (res > 0) {
      const digit = res % 10;

      sum += digit * digit;
      res = Math.floor(res / 10);
    }

    res = sum;
  }

  return true;
};