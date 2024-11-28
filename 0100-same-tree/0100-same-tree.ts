/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let res = true;

  function recursive(
    nodeA: TreeNode | null | undefined,
    nodeB: TreeNode | null | undefined
  ): void {
    if (nodeA?.val !== nodeB?.val) {
      res = false;
      return;
    }
    if (!nodeA && !nodeB) return;
    recursive(nodeA?.left, nodeB?.left);
    recursive(nodeA?.right, nodeB?.right);
  }

  recursive(p, q);

  return res;
};