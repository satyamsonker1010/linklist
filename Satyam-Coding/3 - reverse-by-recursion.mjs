import Linklist from "./index.mjs";

const ll = new Linklist();

ll.addNode(10);
ll.addNode(20);
ll.addNode(30);
ll.addNode(40);
ll.addNode(50);

let head = ll.head;
let tail = ll.tailNode();
let size = ll.isSize();

function reverse(headNodeData, tailNodeData) {
  if (headNodeData === null) return;
  reverse(headNodeData.next, tailNodeData);
  if (headNodeData === tailNodeData) {
  } else {
    headNodeData.next.next = headNodeData;
  }
}

function reverseLL(headNode, tailNode) {
  reverse(headNode, tailNode);
  headNode.next = null;
  let tamp = headNode;
  headNode = tailNode;
  tailNode = tamp;
  return headNode;
}
const result = reverseLL(head, tail);
console.log(ll.printLinkList(result));
