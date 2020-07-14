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
  reverse() {
    if (this.first === undefined) {
      return;
    }
    let currentNode = this.first;
    let prev;
    let next;
    while (currentNode.next !== undefined) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    this.first = currentNode;
    this.first.next = prev;
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
list.push(4);
list.push(3);
list.push(2);
list.push(1);
list.reverse();
console.log(list.get(4) === 5 ? "REVERSE WORKS 🌈" : "REVERSE DOESN'T WORK ⛈");
