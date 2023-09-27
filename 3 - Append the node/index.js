class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  listSize() {
    return this.size;
  }

  listPrint() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let cur = this.head;
      let str = "";
      while (cur) {
        str += cur.value + " ";
        cur = cur.next;
      }
      console.log(`The linklist: ${str}`);
    }
  }

  listAppend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.size++;
  }
}

const ll = new Linklist();
console.log(ll.isEmpty());
console.log(ll.listSize());
ll.listAppend(10);
ll.listAppend(20);
ll.listAppend(30);
ll.listAppend(40);
console.log(ll.isEmpty());
console.log(ll.listSize());
ll.listPrint();
