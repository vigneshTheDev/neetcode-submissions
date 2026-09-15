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
        const sorted = this.walk(root, k)
        return sorted[k - 1]
    }
    walk(root, k, path=[]) {
        if (root.left) {
            this.walk(root.left, k, path)
        }

        path.push(root.val)

        if (root.right) {
            this.walk(root.right, k,path)
        }
        return path
    }
}
