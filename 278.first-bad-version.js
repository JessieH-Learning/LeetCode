/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n, i = 1) {

        if (n === 1) return 1;
        const num = isBadVersion(Math.trunc(n / 2)) ? Math.trunc(n / 2) : n;

        if (!isBadVersion(num)) { i = i + num; }
        while (i <= num && !isBadVersion(i)) { i++; }

        return i;
    };
};
// @lc code=end

