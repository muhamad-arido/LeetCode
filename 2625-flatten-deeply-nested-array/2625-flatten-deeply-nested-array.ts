type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n === 0) return arr;

    return arr.reduce((acc: MultiDimensionalArray, val) => {
        if (Array.isArray(val)) {
            acc.push(...flat(val, n - 1));
        } else {
            acc.push(val);
        }
        return acc;
    }, []);
};