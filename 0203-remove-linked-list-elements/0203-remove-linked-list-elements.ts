/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  while (head && head.val === val) {
    head = head.next;
  }

  let res: ListNode | null = head;

  while (res) {
    if (res.next && res.next.val === val) {
      res.next = res.next?.next;
    } else {
      res = res.next;
    }
  }

  return head;
};