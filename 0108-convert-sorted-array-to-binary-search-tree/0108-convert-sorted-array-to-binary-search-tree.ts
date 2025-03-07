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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function recursive(left: number, right: number) {
    if (left > right) return null;

    const mid: number = Math.floor((left + right) / 2);
    const node: TreeNode = new TreeNode(nums[mid]);

    node.left = recursive(left, mid - 1);
    node.right = recursive(mid + 1, right);

    return node;
  }

  return recursive(0, nums.length - 1);
};