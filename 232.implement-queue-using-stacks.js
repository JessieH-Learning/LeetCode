/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function () {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    while (this.q1.length) {
        this.q2.push(this.q1.pop());
    }
    const q2POP = this.q2.pop();

    while (this.q2.length) {
        this.q1.push(this.q2.pop());
    }

    return q2POP;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.q1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

