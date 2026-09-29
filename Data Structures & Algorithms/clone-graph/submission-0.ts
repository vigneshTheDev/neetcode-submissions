/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        if (!node) return null;
        return this.dfs(node, new Map());
    }
    dfs(node: Node, map: Map<Node, Node>) {
        const newNode: Node = {
            val: node.val,
            neighbors: [],
        };
        map.set(node, newNode);

        newNode.neighbors = node.neighbors.map((n) => map.get(n) || this.dfs(n, map));

        return newNode;
    }
}
