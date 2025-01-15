function minimizeXor(num1: number, num2: number): number {
  const targetBits = num2.toString(2).split("1").length - 1;
  let result = 0;
  let bitsAdded = 0;

  for (let i = 31; i >= 0; i--) {
    const bitMask = 1 << i;
    if ((num1 & bitMask) !== 0 && bitsAdded < targetBits) {
      result |= bitMask;
      bitsAdded++;
    }
  }

  let i = 0;
  while (bitsAdded < targetBits) {
    const bitMask = 1 << i;
    if ((result & bitMask) === 0) {
      result |= bitMask;
      bitsAdded++;
    }
    i++;
  }

  return result;
}