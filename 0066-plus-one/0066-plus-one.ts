function plusOne(digits: number[]): number[] {
  for (let index = 1; index <= digits.length; index++) {
    if (digits[digits.length - index] !== 9) {
      digits[digits.length - index] += 1;
      return digits;
    }

    digits[digits.length - index] = 0;

    if (index === digits.length) {
      digits.unshift(0);
    }
  }

  return digits;
};