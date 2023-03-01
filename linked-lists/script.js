// A class is an object as well, so our head will be LinkedList.

// Representing the full list
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(value) {
        // Add new node containing value to the end of the list
        let node = new Node (value);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    prepend(value) {
        // Add new node containing value to the start of the list
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    size() {
        // returns total number of nodes in list
        return this.length;
    }

    head() {
        // return first node in list?
        return this.head;
    }

    tail() {
        // return last node in list??
        return this.tail;
    }

    atIndex(index) {
        let index = 0;
        // to get the index of a specific value, start at the beginning and traverse through each one until you reach the target value
        // If here
    }

    pop() {
        // Remove last element in list
        if (this.head === null) return undefined;
        
    }

    find(value) {
        // return index of the node containing value
    }

    toString() {
        // represent all objects as strings ( value ) -> ( value ) -> null

    }
}

// Containing value() function and link to nextNode, with both set as null by default
class Node {
    constructor(value) {
        this.value = null;
        this.nextNode = null;
    }
}