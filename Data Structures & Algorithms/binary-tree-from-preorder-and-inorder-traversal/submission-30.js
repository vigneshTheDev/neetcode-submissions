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
        const root = new TreeNode(preorder[0])
        const stack = [root]
        for (let i = 1; i < preorder.length; i++) {
            const value = preorder[i]
            const newNode = new TreeNode(value)
            let node = stack.at(-1)

            if (node.val!== inorder[inorderIdx]) {
                node.left = newNode;
                stack.push(node.left);
            } else {
                while (stack.length && inorder[inorderIdx] === stack.at(-1).val) {
                    node = stack.pop()
                    inorderIdx++
                }
                node.right = newNode
                stack.push(newNode)
            }
        }
        return root
    }
}
