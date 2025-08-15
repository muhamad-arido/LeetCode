function isPowerOfFour(n: number): boolean {
  if (n <= 0) return false;

  let low = 1;
  let high = n;

  while (low <= high) {
    let mid = (low + high) >> 1;
    let power = mid * mid * mid * mid;

    if (power === n) {
      return true;
    } else if (power < n) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
};