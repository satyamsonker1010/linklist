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
  //   Node add in starting position
  prepend(value){
    const node = new Node(value);
    if(this.head){
        node.next = this.head;
        this.head = node;
    }else{
         this.head = node;
    }
    this.size++;
  }

  printlist(){
     let str = "";
     let cur = this.head;
     while(cur){
        str += cur.value+" ";
        cur = cur.next;
     }
     console.log(str);
  }
}

const ll = new Linklist();
console.log(ll.isEmpty());
console.log(ll.listSize());
ll.prepend(10);
ll.prepend(20);
ll.prepend(30);
ll.prepend(40);
console.log(ll.isEmpty());
console.log(ll.listSize());
ll.printlist();






