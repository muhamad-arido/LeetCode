function largestGoodInteger(num: string): string {
  let res = "";

  for (let i = 0; i <= 9; i++) {
    const goodInteger = i.toString().repeat(3);

    if (num.includes(goodInteger)) res = goodInteger;
  }

  return res;
};