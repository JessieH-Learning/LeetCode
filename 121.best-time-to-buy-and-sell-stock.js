/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices, bestPrice = 0) {

    let min = Math.pow(10, 4);

    prices.forEach(v => {
        min = Math.min(min, v);
        bestPrice = Math.max(bestPrice, v - min);
    })

    return bestPrice;

};
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 4, 1]));