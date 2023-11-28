/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let ans;

  if (tokens.length === 1) return +tokens[0];

  tokens.forEach((v, i) => {
    //  Save number into stack
    if (isNumber(v)) return stack.push(+v);

    //  Handle symbol
    let secondNum = stack.pop();
    let firstNum = stack.pop();

    //  It's important to add () to secondNum because of the negative will cause the formula cal error
    ans = calculateAndRoundDown(`${firstNum}${v}(${secondNum})`);
    stack.push(ans);
  });

  return ans;
};

function isNumber(string) {
  return isNaN(+string) ? false : true;
}

function calculateAndRoundDown(formula) {
  return parseInt(eval(formula));
}
// @lc code=end
