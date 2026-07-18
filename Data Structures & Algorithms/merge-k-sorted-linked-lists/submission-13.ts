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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        const pointers = {}
        const head = new ListNode(0, null)
        let curr = head;

        const k = lists.length
        let completed = 0

        for (let i = 0; i < k; i++) {
            pointers[i] = lists[i]
        }

        while(completed < k) {
            let min = new ListNode(Infinity, null)
            let minI = -1

            for (let i = 0; i < k; i++) {
                const pointer = pointers[i]

                if (pointer && pointer.val < min.val) {
                    min = pointer
                    minI = i
                }
            }

            
            if (minI === -1) break;

            curr.next = min;
            curr = min;
            pointers[minI] = pointers[minI].next
            if (!pointers[minI]) completed++
            
        }
        return head.next;
    }
}
