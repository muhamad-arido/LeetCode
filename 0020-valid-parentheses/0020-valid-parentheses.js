/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const isOpening = (value) => "([{".includes(value);
  const isPair = (value) => value === "()" || value === "[]" || value === "{}";

  if (s.length % 2) return false;

  const res = [];

  [...s].map((value) => {
    if (isOpening(value)) return res.push(value);
    if (isPair(res.at(-1) + value)) return res.pop();
  });

  return res.length === 0;
};