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
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  removeNodeByValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else if (this.size === 1 && this.head.value !== value) {
      console.log("Element not present");
    } else {
      let prv = this.head;
      let i = 0;
      let status = false;
      while (prv.next && prv.next.value !== value) {
        prv = prv.next;
        i++;
        if (i === this.size - 1 && prv.value !== value) {
          status = true;
        }
      }
      if (status) {
        console.log("Element not found in list.");
      } else {
        prv.next = prv.next.next;
        this.size--;
      }
    }
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
}

const ll = new Linklist();
console.log(ll.isEmpty());
console.log(ll.listSize());

ll.prepend(30);
ll.prepend(20);
ll.prepend(10);
ll.listPrint();
ll.removeNodeByValue(30);
ll.removeNodeByValue(10);
ll.removeNodeByValue(20);
ll.listPrint();
console.log(ll.listSize());
