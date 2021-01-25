class Node {
    constructor (data) {
        this.data = data;
        // this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head == null;
    };

    peek() {
        return this.head?.data;  // ? checks existance to prevent error
    };

    add(data) {
        const node = new Node(data);
        if (this.tail) this.tail.next = node;
        this.tail = node;
        if (!this.head) this.head = node;
    };

    remove() {
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        return this.head.data;
    };
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top === null;
    };

    peek() {
        return this.top?.data;  // ? checks existance to prevent error
    };

    add(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
    };

    remove() {
        const data = this.top.data;
        this.top = this.top.next;
        return data;
    };
}

let queue = new Queue();
queue.add('First');
queue.add('Second');
queue.add('Third');
queue.add('Fourth');
console.log(queue);

let stack = new Stack();
stack.add('First');
stack.add('Second');
stack.add('Third');
stack.add('Fourth');
console.log(stack);