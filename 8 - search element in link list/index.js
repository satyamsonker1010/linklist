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

  printList() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let cur = this.head;
      let str = "";
      while (cur) {
        str += cur.value + " ";
        cur = cur.next;
      }
      console.log(`List items is ${str}`);
    }
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

  searchValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let cur = this.head;
      let i = 0;
      while (cur && cur.value !== value) {
        cur = cur.next;
        i++;
      }
      if (cur) {
        console.log(`Element ${value} found successfully and index is ${i}.`);
      } else {
        console.log(`Element ${value} not found.`);
      }
    }
  }
}

const ll = new Linklist();
console.log(ll.isEmpty());
console.log(ll.listSize());
ll.prepend(30);
ll.prepend(20);
ll.prepend(10);
ll.printList();
console.log(ll.listSize());
ll.searchValue(0);
