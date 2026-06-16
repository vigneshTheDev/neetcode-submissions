/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slowPointer = head;
        let fastPointer = head;

        while(slowPointer && fastPointer) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next?.next;

            if (slowPointer && slowPointer === fastPointer) return true;
        }

        return false;
    }
}
