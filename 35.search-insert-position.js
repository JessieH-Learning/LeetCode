/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.length === 1) return nums[0] >= target ? 0 : 1;

    if (nums.includes(target)) {
        return nums.findIndex(v => v === target);
    } else {
        if (nums[nums.length - 1] < target) return nums.length;
        return nums.findIndex(v => v > target);
    }
};
// @lc code=end

