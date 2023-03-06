/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target, index = -1) {

    if (nums.length === 1 && nums[0] !== target) return index;

    const numsSmall = nums.splice(0, nums.length / 2);
    if (target < nums[0]) {
        index = numsSmall.findIndex(v => v === target);
    } else {
        index = nums.findIndex(v => v === target);
        if (index !== -1) index += numsSmall.length;
    }
    return index;

};
// @lc code=end

