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

  ListPrint() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let str = "";
      let cur = this.head;
      while (cur) {
        str += cur.value + " ";
        cur = cur.next;
      }
      console.log(`List values => ${str}`);
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

  reverseList(){
    if(this.isEmpty()){
        console.log("List is empty");
    }else{
        if(this.size === 1){
           return this.head;
        }else{
            let cur = this.head;
            let prv = null;
            while(cur){
                const nextList = cur.next;
                cur.next = prv;
                prv = cur;
                cur = nextList;
            } 
            this.head = prv;
        }
    }
  }
}

const ll = new Linklist();
ll.prepend(30);
ll.prepend(20);
ll.prepend(10);
ll.ListPrint();
ll.reverseList();
ll.ListPrint();




