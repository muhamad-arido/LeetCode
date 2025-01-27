type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  if (!size) return [];

  const res: Obj[][] = Array.from(
    { length: Math.ceil(arr.length / size) },
    () => []
  );

  for (let index = 0; index < arr.length; index++) {
    res[Math.floor(index / size)].push(arr[index]);
  }

  return res;
}
