'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    //if list is currently empty
    //create new node
    //say that head === new node
    //next pointer is null
    //  notice that in line 20 and line 10  "this.head = null", therefore we do not need
    //  the conditional logic written below
    //if (this.head === null) {
    //  this.head = new _Node(item, null)
    //} else {
    //if list is not empty
    //create a new node
    //have the new node point to the current head
    //make the head point to the new node
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    //check if list is empty
    //  if it is, call insert first
    if (this.head === null) {
      insertFirst(item);
    } else {
      const newNode = new _Node(item, null);
      let lastNode = this.head;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
    }
    //create a new node
    //set new node.next to be null
    //find the node who points to 'null'
    //save that node in a variable 'lastNode'
    //make lastNode point to newNode
  }

  insertBefore(item, key) {
    //set a previous and current node
    let curNode = this.head;
    let prevNode = this.head;
    //iterate until we find node where key currentnode.value
    while (curNode !== null) {
      if (curNode.value === key) {
        //create a new node
        const newNode = new _Node(item, curNode);
        //previous points to new
        prevNode.next = newNode;
        //new points to current
        return;
      }
      prevNode = curNode;
      curNode = curNode.next;
    }
  }

  insertAfter(item, key) {
    //set a current node
    let curNode = this.head;
    //iterate until we find node where key currentnode.value
    while (curNode !== null) {
      if (curNode.value === key) {
        //create a new node
        curNode.next = new _Node(item, curNode.next);
        return;
      }
      curNode = curNode.next;
    }
  }

  insertAt(item, key) {
    let curNode = this.head;
    let prevNode = this.head;
    let counter = 0;
    while (curNode !== null) {
      counter++;
      if (counter === key) {
        prevNode.next = new _Node(item, curNode.next);
        return;
      }
      curNode = curNode.next;
      prevNode = curNode;
    }
  }

  remove(item) {
    //if list is empty return null
    if (this.head === null) {
      return null;
    }
    //REMOVE FIRST ITEM
    //if item === this.head.value --> assign this.head to this.head.next
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //REMOVE MIDDLE ITEM
    //set a current node to this.head
    //set a previous node to this.head
    let currentNode = this.head;
    let previousNode = this.head;
    //make a while loop --> currentnode value does not equal value AND doesn't equal null -->
    //  previousnode = currentnode
    //  currentnode = currentnode.next
    while (currentNode !== null && currentNode.value !== item) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    //set previous node to point towards currentnode.next
    //set currentnode.next to point to null
    if (currentNode === null) {
      console.log('item not found');
      return;
    }
    previousNode.next = currentNode.next;
    currentNode.next = null;
    //if item is not found
  }

  find(item) {
    if (!this.head) {
      return null;
    }
    //set a current node
    let currentNode = this.head;
    //iterate over the sll
    while (currentNode !== null && currentNode.value !== item) {
      currentNode = currentNode.next;
    }
    //return the item if it is equal to the current node value
    if (currentNode.value === item) {
      return currentNode;
    } else {
      return null;
    }
  }
}

function serializeSll(sll) {
  let currentNode = sll.head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  return;
}

function size(sll) {
  let currentNode = sll.head;
  let counter = 0;
  while (currentNode !== null) {
    counter++;
    currentNode = currentNode.next;
  }
  return counter;
}

function isEmpty(sll) {
  return sll.head === null;
}

function findPrevious(sll, key) {
  let currentNode = sll.head;
  let previousNode = sll.head;

  while (currentNode) {
    if (currentNode.value === key) {
      return previousNode;
    }

    previousNode = currentNode;
    currentNode = currentNode.next;    
  }
  return null;
}

function findLast(sll) {
  let currentNode = sll.head;

  while (currentNode) {
    if (currentNode.next === null) {
      return currentNode.value;
    }

    currentNode = currentNode.next;    
  }
  return null;
}

function main() {
  const sll = new LinkedList();
  sll.insertFirst('Apollo');
  sll.insertFirst('Boomer');
  sll.insertLast('Helo');
  sll.insertFirst('Husker');
  sll.insertFirst('Starbuck');
  sll.insertLast('Tauhida');
  sll.insertBefore('Athena', 'John');
  sll.insertAfter('Hotdog', 'Helo');
  sll.insertAt('cat', 3);
  sll.remove('Tauhida');
  // console.log(size(sll));
  // console.log(isEmpty(sll))
  // console.log(isEmpty(new LinkedList())
  // console.log(findPrevious(sll, 'cat'));
  // console.log('Last is ', findLast(sll));
  serializeSll(sll);
}

main();
