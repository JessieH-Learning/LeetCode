/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const regex = /(\[\]|\{\}|\(\))/;
    while (regex.test(s)) s = s.replace(regex, '');
    
    return s.length === 0 ? true : false;

};
// @lc code=end

/**
 * 解題思維:
 * 利用正規表達式確認是否字串內含有成對的三種括號,
 * 如果沒有的話迴圈就break,
 * 最終確認字串數若為0則全部配對完成
 */