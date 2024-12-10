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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null;

  function getLength(head: ListNode | null): number {
    let length: number = 0;
    let current: ListNode | null = head;

    while (current) {
      length++;
      current = current.next;
    }

    return length;
  }

  const lengthA: number = getLength(headA);
  const lengthB: number = getLength(headB);
  let diff: number = Math.abs(lengthA - lengthB);

  while (diff > 0) {
    if (lengthA > lengthB) {
      headA = headA?.next || null;
    } else {
      headB = headB?.next || null;
    }
    diff--;
  }

  while (headA && headB) {
    if (headA === headB) return headA;

    headA = headA.next;
    headB = headB.next;
  }

  return null;
}