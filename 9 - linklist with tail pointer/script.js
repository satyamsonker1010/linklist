class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.tail = null;
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
      console.log("List is empty.");
    } else {
      let str = "";
      let cur = this.head;
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
      this.tail = node;
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
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  deleteNode(index) {
    if (index < 0 || index >= this.size || index===undefined) {
      console.log("Index is not correct.");
    } else {
      if (index === 0) {
        this.head = this.head.next;
        this.size--;
      } else {
        let cur = this.head;
        let i = 0;
        while (i < index - 1) {
          cur = cur.next;
          i++;
        }
        cur.next = cur.next.next;
        if (index === this.size - 1) {
          this.tail = cur;
        }
        this.size--;
      }
    }
  }
}


const ll = new Linklist();

console.log(ll.isEmpty());
console.log(ll.listSize());

ll.prepend(30);
ll.append(20);
ll.append(10);
ll.listPrint();
console.log(ll.listSize());
ll.deleteNode(2);
ll.append(50);
ll.append(70);
ll.listPrint();
console.log(ll.listSize());
ll.deleteNode(0);
ll.deleteNode(2);
ll.listPrint();
console.log(ll.listSize());