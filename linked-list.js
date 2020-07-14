class LinkedList {
  first = undefined;
  push(value) {
    const newNode = new Node(value);
    if (this.first === undefined) {
      this.first = newNode;
    } else {
      let currentNode = this.first;
      while (currentNode.next !== undefined) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  length() {
    let currentNode = this.first;
    if (currentNode === undefined) {
      return 0;
    } else {
      let count = 1;
      while (currentNode.next !== undefined) {
        currentNode = currentNode.next;
        count++;
      }
      return count;
    }
  }
  get(index) {
    // index = 2
    let currentNode = this.first;
    let count = 1;
    while (index !== count - 1) {
      if (currentNode === undefined) {
        return undefined;
      }
      currentNode = currentNode.next;
      count++;
    }

    return currentNode ? currentNode.value : undefined;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

const list = new LinkedList();

list.push(5);
list.push(3);
console.log(list.length());
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
