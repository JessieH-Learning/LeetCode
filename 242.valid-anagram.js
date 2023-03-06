/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s === t) return true;
    if ([...s].sort().join('') === [...t].sort().join('')) return true;

    return false;
    
};
// @lc code=end

