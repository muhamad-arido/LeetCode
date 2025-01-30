type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
  if (Array.isArray(obj)) return !obj.length;
  if (typeof obj === "object") return !Object.keys(obj).length;

  return false;
}