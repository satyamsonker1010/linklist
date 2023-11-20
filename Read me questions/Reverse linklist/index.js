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

  length() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next !== null) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.size++;
  }

  print() {
    if (this.head === null) {
      return null;
    } else {
      const ll = [];
      let cur = this.head;
      while (cur !== null) {
        ll.push(cur.value);
        cur = cur.next;
      }
      return ll;
    }
  }

  reversell() {
    if (this.isEmpty()) {
      return null;
    } else {
      let prv = null;
      let cur = this.head;
      while (cur !== null) {
        const nextPointer = cur.next;
        cur.next = prv;
        prv = cur;
        cur = nextPointer;
      }
      this.head = prv;
    }
  }
}

const ll = new Linklist();
console.log(ll.isEmpty());
ll.prepend(30);
ll.prepend(20);
ll.prepend(10);
ll.append(40);
ll.append(50);
console.log(ll.isEmpty());
console.log(ll.length());
console.log(ll.print());
ll.reversell();
console.log(ll.print());
