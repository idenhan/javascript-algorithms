class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(0);
  let head = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }

  if (l1 !== null) head.next = l1;
  if (l2 !== null) head.next = l2;

  return dummy.next;
};
