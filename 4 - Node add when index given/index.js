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
      console.log(`List is ${str}`);
    }
  }
  prepend(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
    this.size++;
  }

  addInIndex(value, index) {
    if (index < 0 || index >= this.size) {
      console.log("Index position is not correct.");
    } else {
      let node = new Node(value);
      if (index === 0) {
        this.prepend(value);
      } else {
        let i = 0;
        let cur = this.head;
        while (i < index - 1) {
          cur = cur.next;
          i++;
        }
        node.next = cur.next;
        cur.next = node;
        this.size++;
      }
    }
  }
}

const ll = new Linklist();
console.log(ll.isEmpty());
console.log(ll.listSize());
ll.listPrint();
ll.prepend(10);
ll.prepend(20);
ll.prepend(30);
ll.prepend(40);
ll.listPrint();
ll.addInIndex(50,1)
ll.listPrint();
ll.addInIndex(60,4)
ll.listPrint();
console.log(ll.listSize());