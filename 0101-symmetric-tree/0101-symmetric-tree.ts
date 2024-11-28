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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  function recursive(nodeA: TreeNode | null, nodeB: TreeNode | null): boolean {
    if (nodeA === null && nodeB === null) return true;
    if (nodeA === null || nodeB === null) return false;
    if (nodeA.val !== nodeB.val) return false;

    return (
      recursive(nodeA.left, nodeB.right) && recursive(nodeA.right, nodeB.left)
    );
  }

  return recursive(root.left, root.right);
};