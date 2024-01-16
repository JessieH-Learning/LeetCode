/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * NOTE: 想法是先跑一次迴圈記下每個node, 再跑一次回圈寫入
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let newHead = (newHead2 = head);
  const cloneHead = new Map();

  while (newHead !== null) {
    cloneHead.set(newHead, new Node(newHead.val));
    newHead = newHead.next;
  }

  while (newHead2 !== null) {
    if (newHead2.next !== null)
      cloneHead.get(newHead2).next = cloneHead.get(newHead2.next);
    if (newHead2.random !== null)
      cloneHead.get(newHead2).random = cloneHead.get(newHead2.random);
    newHead2 = newHead2.next;
  }

  return cloneHead.get(head);
};
// @lc code=end
