import Linklist from "./index.mjs";
const ll = new Linklist();

ll.addNode("a");
ll.addNode("b");
ll.addNode("c");
ll.addNode("d");
ll.addNode("e");
ll.addNode("f");
ll.addNode("g");
ll.addNode("h");


//a h b g c f d e

let leftPoint;
let size = ll.isSize();
let tail = ll.tailNode();
function foldLinkList(headNode, stopPointer) {
  if (headNode === null) return;
  foldLinkList(headNode.next, stopPointer + 1);

  if (stopPointer > Math.floor(size / 2)) {
    let rightPoint = headNode;
    let backup = leftPoint.next;
    leftPoint.next = rightPoint;
    headNode.next = backup;
    leftPoint = backup;
  } else if (stopPointer === Math.floor(size / 2)) {
    tail = headNode;
    tail.next = null;
  }
}

function foldLL() {
  leftPoint = ll.head;
  foldLinkList(ll.head, 0);
  return ll.head;
}

const result = foldLL();
console.log(ll.printLinkList(result));
