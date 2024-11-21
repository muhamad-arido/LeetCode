/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = "";
  const isValid = (s, index) =>
    strs.every((value) => value[index] === s[index] && value.includes(s));

  return [...strs[0]]
    .filter((value, index) => {
      res += value;
      if (isValid(res, index)) {
        return res;
      }
    })
    .join("");
};