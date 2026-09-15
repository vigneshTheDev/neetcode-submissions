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
        const sorted = this.walk(root)
        return sorted[k - 1]
    }
    walk(root, path=[]) {
        if (root.left) {
            this.walk(root.left, path)
        }

        path.push(root.val)

        if (root.right) {
            this.walk(root.right, path)
        }
        return path
    }
}
