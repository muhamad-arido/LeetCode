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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let res: ListNode | null = head;

  while (res) {
    if (res.next && res.val === res.next.val) {
      res.next = res.next?.next;
      continue;
    }
    res = res.next;
  }

  return head;
}