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
  const inorderTraversal: Array<number> = [];

  (function createInorder(node: TreeNode | null) {
    if (!node) return;

    createInorder(node.left);
    inorderTraversal.push(node.val);
    createInorder(node.right);
  })(root);

  if (inorderTraversal.length % 2 === 0) return false;

  const mid: number = Math.floor(inorderTraversal.length / 2);
  const left: Array<number> = inorderTraversal.slice(0, mid);
  const right: Array<number> = inorderTraversal.slice(mid + 1).reverse();

  return left.every((v, i) => v === right[i]);
};