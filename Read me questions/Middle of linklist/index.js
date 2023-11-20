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

  get isEmpty() {
    return this.size === 0;
  }

  get length() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty) {
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

  get print() {
    const ll = [];
    let cur = this.head;
    while (cur !== null) {
      ll.push(cur.value);
      cur = cur.next;
    }
    return ll;
  }

  //Middle of linklist

  get middle() {
    if (this.isEmpty) {
      return `Link list is empty. So middle is nor available.`;
    } else {
      let slow = this.head;
      let fast = this.head;
      while (fast && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow.value;
    }
  }
}

const ll = new Linklist();
console.log(ll.isEmpty);
// ll.prepend(30);
// ll.prepend(20);
// ll.prepend(10);
// ll.append(40);
// ll.append(50);
console.log(ll.isEmpty);
console.log(ll.length);
console.log(ll.print);
console.log(ll.middle);
