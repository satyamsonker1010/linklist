import Linklist from "./index.mjs";

const ll = new Linklist();

ll.addNode(10);
ll.addNode(20);
ll.addNode(30);
ll.addNode(40);
ll.addNode(50);

// Reverse Link list

export function reverseLL(head) {
  let cur = head;
  let next = head;
  let prv = null;

  while (cur) {
    next = cur.next;
    cur.next = prv;
    prv = cur;
    cur = next;
  }
  return prv;
}

ll.head = reverseLL(ll.head);
console.log(ll.printLinkList(ll.head));

