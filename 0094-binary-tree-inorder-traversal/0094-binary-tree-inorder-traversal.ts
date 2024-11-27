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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: Array<number> = [];

  function recursive(node: TreeNode | null) {
    if (!node) return;

    recursive(node.left);
    res.push(node.val);
    recursive(node.right);
  }

  recursive(root);

  return res;
};