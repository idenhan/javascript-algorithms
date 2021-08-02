/*
  - Stacks
  : A LIFO data structure. The last element added to the stack
  will be the first element removed from the stack. e.g. Array.push/pop()
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();

console.log(stack.push(23));
console.log(stack.pop());

/* BIG O */
// Insertion: O(1)
// Removal: O(1)
// Searching: O(N)
// Access: O(N)

/*
  - Queues
  : A FIFO data structure, all elements are first in first out.
  : Useful for processing tasks and foundational for more complex
  data structures.
*/

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}

let queue = new Queue();

console.log(queue.enqueue(3));
console.log(queue.dequeue());

/* BIG O */
// Insertion: O(1)
// Removal: O(1)
// Searching: O(N)
// Access: O(N)
