/* 
  - Singly Linked Lists are an excellent alternative to arrays
    when insertion and deletion at the beginning are frequently 
    required.
  - Arrays contain a built in index whereas Linked Lists do not.
  - The idea of a list data structure that consists of nodes is
    the foundation for other data structures like Stacks and
    Queues.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  // Push Solution
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Pop Solution
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  // Shift Solution
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    return currentHead;
  }
  // Unshift Solution
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // Get Solution
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // Set Solution
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // Insert Solution
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // Remove Solution
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = revNode.next;
    prevNode.ext = removed.next;
    this.length--;

    return removed;
  }
  // Reverse Solution
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();

list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.push("<3");
list.push(":)");
console.log(list);

list.pop();
console.log(list);

list.shift();
console.log(list);

list.unshift("Iden");
console.log(list);

list.get(3);
console.log(list.get(3));

list.set(3, "<33");
console.log(list.get(3));
console.log(list.set(3, "<33"));

list.insert(4, "Insert");
console.log(list);

list.remove(0);
console.log(list);

list.reverse();
list.print();

/* BIG O */
// Insertion: O(1)
// Removal: O(1) or O(N)
// Searching: O(N)
// Access: O(N)
