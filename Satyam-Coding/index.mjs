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


  isSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  addNode(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.size++;
    } else {
      let cur = this.head;
      while (cur.next !== null) {
        cur = cur.next;
      }
      cur.next = node;
      this.size++;
    }
  }

  printLinkList(head) {
    let result = [];
    let cur = head;
    while (cur) {
      result.push(cur.value);
      cur = cur.next;
    }
    return result;
  }

  tailNode(){
    if(this.head === null || this.head.next === null) return this.head;
    
    let cur = this.head;
    while(cur.next){
      cur = cur.next
    }
    return cur;
  }


}

export default Linklist;
