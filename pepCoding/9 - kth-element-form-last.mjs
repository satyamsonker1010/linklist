import Linklist from "./index.mjs";
const ll = new Linklist();
ll.addNode(10);
ll.addNode(20);
ll.addNode(30);
ll.addNode(40);
ll.addNode(50);

function kthLastEle(head, k) {
  if (head === null) return head;
  if (ll.isSize() < k) return null;

  let start = head;
  let end = head;
  for (let i = 1; i < k; i++) {
    end = end.next;
  }

  while (end.next !== null) {
    end = end.next;
    start = start.next;
  }
  return start.value;
}

const KthlastElement = kthLastEle(ll.head, 4);
console.log(KthlastElement);
