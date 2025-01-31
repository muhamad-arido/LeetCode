type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  const res: number[] = [];

  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index], index)) {
      res.push(arr[index]);
    }
  }

  return res;
}