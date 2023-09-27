// Creata a linklist
class Node {
  constructor() {
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

  listsize() {
    return this.size;
  }
}

const ll = new Linklist();
console.log(ll.isEmpty());
console.log(ll.listsize());
