type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj)) {
        return obj.map((item) => compactObject(item as Obj)).filter(Boolean) as JSONValue[];
    } else if (typeof obj === "object" && obj !== null) {
        return Object.fromEntries(
            Object.entries(obj)
                .map(([key, value]) => [key, compactObject(value as Obj)])
                .filter(([_, value]) => Boolean(value))
        ) as Record<string, JSONValue>;
    }
    return obj;
};