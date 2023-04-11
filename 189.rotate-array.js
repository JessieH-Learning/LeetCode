/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length !== 1 || k !== 0) {
        for (let i = nums.length - 1; i >= 0; i--) {
            nums[i + k] = nums[i]
        }

        for (let i = k - 1; i >= 0; i--) {
            nums[i] = nums.pop()
        }
    }
};
// @lc code=end

