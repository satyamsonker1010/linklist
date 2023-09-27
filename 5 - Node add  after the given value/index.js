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

  addNodeInGivenValue(value1, value2) {
    if (this.isEmpty()) {
      console.log(`Value ${value2} is not present.`);
      return;
    } else {
      const node = new Node(value1);
      let cur = this.head;
      let status = false;
      let i = 0;
      while (cur && cur.value !== value2) {
        if (i + 1 === this.size && cur.value !== value2) {
          status = true;
        }
        cur = cur.next;
        i++;
      }
      if (status) {
        console.log(`Value ${value2} is not present.`);
      } else {
        node.next = cur.next;
        cur.next = node;
        this.size++;
      }
    }
  }

  printlist() {
    let str = "";
    let cur = this.head;
    while (cur) {
      str += cur.value + " ";
      cur = cur.next;
    }
    console.log(str);
  }
}

const ll = new Linklist();
console.log(ll.isEmpty());
console.log(ll.listSize());

ll.prepend(40);
ll.prepend(30);
ll.prepend(20);
ll.prepend(10);

ll.printlist();
ll.addNodeInGivenValue(15, 10);
ll.printlist();
