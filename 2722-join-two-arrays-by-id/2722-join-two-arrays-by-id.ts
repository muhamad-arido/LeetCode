type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const ID = new Map<number, Record<string, JSONValue>>();

  for (const e of [...arr1, ...arr2]) {
    ID.set(e.id, { ...ID.get(e.id), ...e });
  }

  return [...ID.values()].sort(
    (a, b) => (Number(a.id) ?? 0) - (Number(b.id) ?? 0)
  ) as ArrayType[];
};