/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func levelOrder(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}
	
	curr := []*TreeNode{root}
	children := []*TreeNode{}
	out := [][]int{}

	for len(curr) > 0 {
		children = []*TreeNode{}
		values := []int{}
		for i := range curr {
			node := curr[i]
			values = append(values, node.Val)
			if node.Left != nil {
				children = append(children, node.Left)
			}

			if node.Right != nil {
				children = append(children, node.Right)
			}
		}
		out = append(out, values)
		curr = children
	}
	return out
}
