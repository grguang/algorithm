/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head || !head.next) {
        return true;
    }
    const headArr = [];
    while (head) {
        headArr.push(head.val);
        head = head.next;
    }
    const middle = Math.ceil(headArr.length / 2);
    for (let i = 0, x = headArr.length - 1; i < middle; i++) {
        if (headArr[i] !== headArr[x]) {
            return false
        }
        x--;
    }
    return true;
};

var isPalindrome = function (head) {
    if (!head || !head.next) {
        return true;
    }
    const headArr = [];
    while (head) {
        headArr.push(head.val);
        head = head.next;
    }
    return headArr.join('') === headArr.reverse().join('')
};

exports.isPalindrome = isPalindrome;
