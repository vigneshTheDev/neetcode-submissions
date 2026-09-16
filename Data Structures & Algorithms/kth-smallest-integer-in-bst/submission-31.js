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
        return this.walk(root, k)[0];
    }
    walk(root, k, len = 0) {
        if (root.left) {
            let found;
            [found, len] = this.walk(root.left, k, len);
            if (found != null) return [found, len];
        }

        len++;
        if (len === k) {
            return [root.val, len];
        }

        if (root.right) {
            return this.walk(root.right, k, len);
        }

        return [null, len]
    }
}
