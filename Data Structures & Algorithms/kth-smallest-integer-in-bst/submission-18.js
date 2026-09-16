/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        return this.walk(root, k)
    }
    walk(root, k, path=[]) {
        if (root.left) {
            const found = this.walk(root.left, k, path)
            if (found != null) return found
        }

        path.push(root.val)
        if (path.length === k) {
            return root.val
        }

        if (root.right) {
            return this.walk(root.right, k, path)
        }
    }
}
