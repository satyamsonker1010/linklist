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
      console.log(`List values => ${str}`);
    }
  }

  




}
