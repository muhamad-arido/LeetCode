/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let res = 0;
  const romansSymbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  [...s].map((value, index, array) => {
    if (romansSymbol[value] < romansSymbol[array[index + 1]]) {
      res -= romansSymbol[array[index]];
    } else {
      res += romansSymbol[array[index]];
    }
  });

  return res;
};