function checkIfExist(arr: number[]): boolean {
  if (arr.filter((value) => value === 0).length >= 2) return true;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== 0 && arr.includes(arr[index] * 2)) {
      return true;
    }
  }

  return false;
}