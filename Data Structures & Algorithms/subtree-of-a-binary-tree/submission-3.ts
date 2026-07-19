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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (root == null || subRoot == null) return root == subRoot

        const nodes = this.find(root, subRoot)
        console.log(nodes)
        return nodes.some(n => this.isSameTree(subRoot, n))
    }

    find(root: TreeNode, subRoot: TreeNode): TreeNode[] {
        const out: TreeNode[] = []

        const nodes = [root]
        while (nodes.length) {
            const node = nodes.pop()
            if (node.val === subRoot.val) {
                out.push(node)
            }
            if (node.left) nodes.push(node.left)
            if (node.right) nodes.push(node.right)
        }

        return out

    }

    isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
        if (tree1 == null || tree2 == null) return tree1 == tree2

        return tree1.val === tree2.val && this.isSameTree(tree1.left, tree2.left) && this.isSameTree(tree1.right, tree2.right)
    }
}
