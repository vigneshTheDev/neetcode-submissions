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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (root == null) return 0

        const levels = [[root]]

        for (let l of levels) {
            const nodes = []
            for (let n of l) {
                if (n.left) nodes.push(n.left)
                if (n.right) nodes.push(n.right)
            }
            if (nodes.length) levels.push(nodes)
        }

        return levels.length

    }
}
