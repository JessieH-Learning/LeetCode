/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    if (s.length === 1) return true;

    s = s.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();

    return s === [...s].reverse().join('');
};
// @lc code=end

/**
 * Steps:
 * 1. 一個字必為true(不管是符號 / 空格 / 英文)
 * 2. 去掉空格或符號後比對一下他是不是回文
 */