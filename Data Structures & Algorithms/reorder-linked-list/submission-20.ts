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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (head == null || head.next == null) return;

        let s = head;
        let f = head.next;

        while (f) {
            s = s.next;
            f = f?.next?.next;
        }

        let head2 = this.reverse(s.next);
        s.next = null;

        while (head && head2) {
            const next = head.next;
            const next2 = head2.next;
            head.next = head2;
            head2.next = next;

            head = next;
            head2 = next2;
        }
    }

    reverse(head: ListNode): ListNode {
        let prev = null;
        let curr = head;

        while (curr) {
            const next = curr.next;

            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
