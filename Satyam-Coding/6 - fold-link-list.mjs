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

const midFind = (head) => {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const reverseList = (head) => {
  if (head === null || head.next === null) return head;
  let cur = head;
  let prv = null;
  let nextHead = null;
  while (cur) {
    nextHead = cur.next;
    cur.next = prv;
    prv = cur;
    cur = nextHead;
  }
  return prv;
};

const foldList = (head) => {
  if (head === null || head.next === null) return head;
  let findMid = midFind(head);
  let halfList = findMid.next;
  findMid.next = null;
  let reverseLL = reverseList(halfList);

  let cur1 = head;
  let cur2 = reverseLL;
  let b1 = null;
  let b2 = null;
  while (cur2 !== null) {
    //backup
    b1 = cur1.next;
    b2 = cur2.next;
    //add nodes
    cur1.next = cur2;
    cur2.next = b1;

    //move forword for traverse
    cur1 = b1;
    cur2 = b2;
  }
  return head;
};

const result = foldList(ll.head);
console.log(ll.printLinkList(result));
