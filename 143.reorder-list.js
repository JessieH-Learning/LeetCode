/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head.next || !head.next.next) return;

  const tempArr = [];

  while (head !== null) {
    tempArr.push(head);
    head = head.next;
  }

  let currentIndex = 0;
  let endIndex = tempArr.length - 1;

  while (currentIndex < endIndex) {
    tempArr[currentIndex].next = tempArr[endIndex];
    currentIndex++;

    //  For even
    if (currentIndex === endIndex) break;

    tempArr[endIndex].next = tempArr[currentIndex];
    endIndex--;
  }

  //  Stop cycle
  tempArr[currentIndex].next = null;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reorderList;
// @after-stub-for-debug-end

cur = 0;
end = 2;
