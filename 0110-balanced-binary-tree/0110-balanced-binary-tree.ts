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

function isBalanced(root: TreeNode | null): boolean {
  function checkDepth(node: TreeNode | null): number {
    if (!node) return 0;

    const leftNode: number = checkDepth(node.left);
    if (leftNode === -1) return -1;

    const rightNode: number = checkDepth(node.right);
    if (rightNode === -1) return -1;

    if (Math.abs(leftNode - rightNode) > 1) return -1;

    return Math.max(leftNode, rightNode) + 1;
  }

  return checkDepth(root) !== -1;
};