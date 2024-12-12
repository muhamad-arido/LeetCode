function titleToNumber(columnTitle: string): number {
  let total: number = 0;

  for (let index = 0; index < columnTitle.length; index++) {
    const numOfChar: number =
      columnTitle[index].charCodeAt(0) - "A".charCodeAt(0) + 1;

    total = total * 26 + numOfChar;
  }

  return total;
}