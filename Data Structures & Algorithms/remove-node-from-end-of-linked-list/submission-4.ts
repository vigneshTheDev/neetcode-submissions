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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        if(!head) return null

        let len = 0;
        let curr = head;
        while(curr) {
            curr = curr.next
            len++
        }

        let pos = 0
        let target = len - n

        
        curr = head
        let prev = null
        while (pos < target) {
            prev = curr
            curr = curr.next
            pos++
        }

        if (prev) prev.next = curr.next
        return prev == null ? curr.next : head
    }
}
