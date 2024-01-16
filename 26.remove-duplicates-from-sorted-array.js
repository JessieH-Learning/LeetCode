/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 0;
  const uniqueArr = [];

  while (index !== nums.length) {
    if (uniqueArr.includes(nums[index])) {
      nums.splice(index, 1);
      continue;
    }
    uniqueArr.push(nums[index]);
    index++;
  }

  return nums.length;
};
// @lc code=end
