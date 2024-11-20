/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const res = x;
  let result = 0;

  while (x > 0) {
    rightmost = x % 10;
    result = result * 10 + rightmost;
    x = Math.floor(x / 10);
  }

  return result === res;
};