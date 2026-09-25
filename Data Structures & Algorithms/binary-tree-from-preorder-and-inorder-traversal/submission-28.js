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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inorderIdx = 0
        let root = new TreeNode(preorder[0])
        const stack = [root]
        for (let i = 1; i < preorder.length; i++) {
            let node = stack.at(-1)
            const value = preorder[i]
            if (node.val !== inorder[inorderIdx]) {
                node.left = new TreeNode(value)
                stack.push(node.left)
            } else {
                while (stack.length && stack.at(-1).val === inorder[inorderIdx]) {
                    node = stack.pop()
                    inorderIdx++
                }

                node.right = new TreeNode(value)
                stack.push(node.right)
            }
        }
        return root
    }
}
