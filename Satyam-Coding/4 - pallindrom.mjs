import Linklist from "./index.mjs";
import { reverseLL } from "./reverse.mjs";
import { mid } from "./mid-of-linklist.mjs";

const ll = new Linklist();

ll.addNode(10);
ll.addNode(20);
ll.addNode(30);
ll.addNode(20);
ll.addNode(10);

let midNodeData = mid(ll.head).value;
let halfList = midNodeData.next;
midNodeData.next = null;
let reverseLinklist = reverseLL(halfList);

function checkPallindrom(head1, head2) {
  let cur1 = head1;
  let cur2 = head2;
  while (cur1 && cur2) {
    if (cur1.value !== cur2.value) {
      return false;
    }
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  return true;
}

const result = checkPallindrom(ll.head, reverseLinklist);
console.log(result);
