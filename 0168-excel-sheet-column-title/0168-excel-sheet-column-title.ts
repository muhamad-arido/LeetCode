function convertToTitle(columnNumber: number): string {
  let result: string = "";

  while (columnNumber > 0) {
    columnNumber--;

    const letterPosition: number = columnNumber % 26;

    result = String.fromCharCode(65 + letterPosition) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
}