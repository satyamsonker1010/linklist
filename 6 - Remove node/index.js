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
      console.log(`List values ${str}`);
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }

  removeNode(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index is not valid");
    } else if (index === 0) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prv = this.head;
      let i = 0;
      while (i < index - 1) {
        prv = prv.next;
        i++;
      }
      prv.next = prv.next.next;
      this.size--;
    }
  }
}

const ll = new Linklist();

console.log(ll.isEmpty());
console.log(ll.listSize());
ll.prepend(30);
ll.prepend(20);
ll.prepend(10);
ll.listPrint();
ll.removeNode(3)
ll.listPrint();
