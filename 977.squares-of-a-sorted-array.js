/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    if (nums.length === 1) return [Math.abs(Math.pow(nums[0], 2))];

    return nums
        .map(v => {
            return Math.abs(Math.pow(v, 2));
        })
        .sort((a, b) => { return a - b });
};
// @lc code=end

