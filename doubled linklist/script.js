class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  isEmpty() {
    return this.size === 0;
  }
  listSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  listPrint() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let str = "";
      let cur = this.head;
      while (cur) {
        str += cur.value + " ";
        cur = cur.next;
      }
      console.log(`List data => ${str}`);
    }
  }

  reverseListPrint() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let str = "";
      let cur = this.tail;
      while (cur) {
        str += cur.value + " ";
        cur = cur.prev;
      }
      console.log(`Reverse list print => ${str}`);
    }
  }
}

const ll = new Linklist();
console.log(ll.isEmpty());
console.log(ll.listSize());
ll.prepend(10);
ll.prepend(20);
ll.append(30);
console.log(ll);
ll.listPrint();
ll.reverseListPrint();
