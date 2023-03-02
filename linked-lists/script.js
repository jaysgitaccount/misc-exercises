// Representing the full list
class LinkedList {
    constructor() {
        this.length = 0;
        this.headNode = null;
        this.tailNode = null;
    }

    append(value) {
        // Add new node containing value to the end of the list
        let node = new Node (value);
        if (this.headNode === null) {
            this.headNode = node;
            this.tailNode = this.headNode;
        } else {
            this.tailNode.nextNode = node;
            this.tailNode = node;
        }
        this.length++;
    }

    prepend(value) {
        // Add new node containing value to the start of the list
        let node = new Node(value);

        if (this.headNode === null) {
            this.headNode = node;
            this.tailNode = this.headNode;
        } else {
            node.nextNode = this.headNode;
            this.headNode = node;
        }
        this.length++;
    }

    size() {
        // returns total number of nodes in list
        return this.length;
    }

    head() {
        // return first node in list
        return this.headNode;
    }

    tail() {
        // return last node in list
        return this.tailNode;
    }

    at(index) {
        // If the index is not within the list
        if (index < 0 || index >= this.length) return 'Index not found!';

        let currentNode = this.headNode;

        for (let i = 0; i <= index; i++) {
            if (i === index) return currentNode;
            // If we aren't there yet, set currentNode to currentNode.next
            currentNode = currentNode.nextNode;
        }
    }

    pop() {
        // Remove last element in list
        if (this.headNode === null) return null;

        let lastNode = this.tailNode;
        let currentNode = this.headNode;
        
        if (this.length === 1) {
            currentNode = this.headNode;
            this.headNode = null;
            this.tailNode = null;
            this.length--;
            return currentNode;
        }

        for (let i = 0; i <= (this.length - 2); i++) {

            // If we're at the second last node
            if (i === (this.length - 2)) {
                
                this.tailNode = currentNode;
                currentNode.nextNode = null;
                this.length--;
                return lastNode;
            }
            // Move to next node
            currentNode = currentNode.nextNode;
        }
    }

    contains(value) {
        let currentNode = this.headNode;
        for (let i = 0; i < this.length; i++) {
            if (currentNode.value === value) return true;

            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        // return index of the node containing value
        let currentNode = this.headNode;
        for (let i = 0; i < this.length; i++) {
            if (currentNode.value === value) return i;

            currentNode = currentNode.nextNode;
        }
        return null;
    }

    toString() {
        // represent all objects as strings ( value ) -> ( value ) -> null
        if (this.length === 0) return 'null';

        let interval = ' ) -> ( ';
        let last = ' ) -> null';
        let output = '( ';
        
        let currentNode = this.headNode;

        for (let i = 0; i <= this.length; i++) {
            if (i === this.length - 1) {
                output += currentNode.value;
                output += last;
                return output;
            }

            output += currentNode.value;
            output += interval;
            currentNode = currentNode.nextNode;
        }
    }
}

// Containing value() function and link to nextNode, with both set as null by default
class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
}

let list = new LinkedList();

list.append(`I'm appended!`);
list.prepend('hello!');
list.append(5);

console.log(list.toString())

console.log(list.contains(5))