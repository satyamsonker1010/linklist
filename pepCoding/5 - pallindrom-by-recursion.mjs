import Linklist from "./index.mjs";

const ll = new Linklist();

ll.addNode(10);
ll.addNode(20);
ll.addNode(30);
ll.addNode(20);
ll.addNode(10);

let savehead = null;
function checkPallindrom(listhead) {
  if (listhead === null) return true;
  let boolResult = checkPallindrom(listhead.next);
  if (boolResult === false) {
    return false;
  } else if (savehead.value !== listhead.value) {
    return false;
  } else {
    savehead = savehead.next;
    return true;
  }
}

function pallindrom(head) {
  savehead = head;
  let result = checkPallindrom(head);
  return result;
}

const resultData = pallindrom(ll.head);
console.log(resultData);
