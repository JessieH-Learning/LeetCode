/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let needCarry = true;
  let index = digits.length - 1;
  while (needCarry && index >= 0) {
    if ([9, 10].includes(digits[index])) {
      digits[index] = 0;

      if (digits[index - 1] === undefined) {
        digits.unshift(1);
      } else {
        digits[index - 1] += 1;
        if (digits[index - 1] !== 10) {
          needCarry = false;
        }
      }
    } else {
      digits[index] += 1;
      needCarry = false;
    }
    index--;
  }

  return digits;
};
// @lc code=end
