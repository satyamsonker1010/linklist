class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
let head = null;
const first = new Node(10);
const second = new Node(10);
const third = new Node(10);
const fourth = new Node(10);
const fifth = new Node(10);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next =  second;
head = first;

function checkCycle(head) {
  let cur = head;
  if (cur === null) {
    return "Linklist is empty.";
  } else {
    let slow = head;
    let fast = head;
    let status = false;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) {
        status = true;
        break;
      }
    }
    return status;
  }
}

console.log(checkCycle(head));
