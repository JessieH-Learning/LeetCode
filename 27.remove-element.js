/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;

  while (nums[index] !== undefined) {
    if (nums[index] === val) {
      nums.splice(index, 1);
      continue;
    }
    index++;
  }

  return nums.length;
};
// @lc code=end
