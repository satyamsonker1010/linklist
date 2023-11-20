import Linklist from "./index.mjs";

const ll = new Linklist();

ll.addNode(10);
ll.addNode(20);
ll.addNode(30);
ll.addNode(40);
ll.addNode(50);

export function mid(head) {
  if (head === null) return -1;
  let slow = head;
  let fast = head;
  let count = 0;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    count++;
  }
  return { index: count, value: slow };
}

const result = mid(ll.head);
console.log(result);
