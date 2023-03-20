class Node {
    constructor(data) {
        this.data = data || null;
        this.left = null;
        this.right = null;
    }
}

/**
 * Takes an unsorted array and constructs a balanced binary search tree at Tree.root
 */
class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        let sortedArray = this.mergeSort(array);

        return this.getBalancedBST(sortedArray, 0, sortedArray.length - 1);
    }

    getBalancedBST(array, start, end) {
        if (start > end) return null;

        let mid = Math.floor((start + end) / 2);

        let root = new Node(array[mid]);
        root.left = this.getBalancedBST(array, start, mid - 1);
        root.right = this.getBalancedBST(array, mid + 1, end);

        return root;
    }

    mergeSort(array) {
        if (array.length <= 1) return array;

        let mid = Math.floor(array.length / 2);

        let A = this.mergeSort(array.slice(0, mid));
        let B = this.mergeSort(array.slice(mid));
        let sorted = [];
        let i = 0, j = 0, k = 0;

        while (i < A.length && j < B.length) {
            if (A[i] === B[j]) {
                // If a duplicate is found, skip 1
                sorted[k] = A[i];
                i++;
                j++;
            } else if (A[i] > B[j]) {
                sorted[k] = B[j];
                j++;
            } else {
                sorted[k] = A[i]
                i++;
            }
            k++;
        }

        for (; i < A.length; i++) {
            sorted[k] = A[i];
            k++;
        }
        for (; j < B.length; j++) {
            sorted[k] = B[j];
            k++;
        }

        return sorted;
    }

    insert(data) {
        const insertBound = insertNode.bind(this);
        this.root = insertBound(data);

        function insertNode(data, root = this.root) {
            if (root === null) return root = new Node(data);
            if (data === root.data) return root;

            if (data > root.data) {
                root.right = insertBound(data, root.right);
            } else if (data < root.data) {
                root.left = insertBound(data, root.left);
            }

            // Return unchanged node
            return root;
        }
    }

    delete(data) {
        const deleteBound = deleteNode.bind(this);
        this.root = deleteBound(data);

        function deleteNode(data, root = this.root) {
            if (root === null) return root;

            if (data > root.data) {
                root.right = deleteBound(data, root.right);
            } else if (data < root.data) {
                root.left = deleteBound(data, root.left);
            } else {
                if (root.left === null || root.right === null) {
                    return root.left || root.right;
                } else {
                    // If two children
                    root.data = this.getMinNode(root.right).data;
                    root.right = deleteBound(root.data, root.right);
                }
            }
            return root;
        }
    }

    getMinNode(root = this.root) {
        // Get the smallest value node in a subtree
        if (root === null) return;
        if (root.left === null) return root;

        return this.getMinNode(root.left);
    }

    find(data, root = this.root) {
        while (root != null) {
            if (data === root.data) return root;
            if (data > root.data) {
                root = root.right;
            } else {
                root = root.left;
            }
        }

        console.log(`${data} not found in tree.`)
        return null;
    }

    levelOrderRec(func) {
        let values = [];
        const queue = [];
        let getNextNode = recursive.bind(this);

        getNextNode(this.root);

        if (!func) return values;

        function recursive(root) {
            if (func) func(root)
                else values.push(root.data);

            if (root.left) queue.push(root.left)
            if (root.right) queue.push(root.right)

            // Base case: call next or end chain
            if (queue.length > 0) getNextNode(queue.shift());
        }
    }

    levelOrderItr(func) {
        let values = [];
        let queue = [this.root];

        while (queue.length > 0) {
            let current = queue.shift();

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);

            if (func) {
                func(current);
            } else {
                values.push(current.data);
            }
        }

        if (!func) return values;
    }

    inorder(func) {
        const values = [];
        const traverse = traverseInorder.bind(this);

        traverse(this.root);

        if (!func) return values;
        function traverseInorder(root) {
            if (root === null) return;

            traverse(root.left);
            if (func) {
                func(root);
            } else {
                values.push(root.data)
            }
            traverse(root.right);
        }
    }

    preorder(func) {
        const values = [];
        const traverse = traversePreorder.bind(this);

        traverse(this.root);
        if (!func) return values;

        function traversePreorder(root) {
            if (root === null) return;

            if (func) {
                func(root);
            } else {
                values.push(root.data);
            }
            traverse(root.left);
            traverse(root.right);
        }
    }

    postorder(func) {
        const values = [];
        const traverse = traversePostorder.bind(this);

        traverse(this.root);
        if (!func) return values;

        function traversePostorder(root) {
            if (root === null) return;

            traverse(root.left);
            traverse(root.right);
            if (func) {
                func(root);
            } else {
                values.push(root.data);
            }
        }
    }

    height(root = this.root) {
        if (!root) return 0;

        return 1 + Math.max(
            this.height(root.right),
            this.height(root.left)
        );
    }

    depth (data, root = this.root) {
        if (root === null) {
            console.log(`${data} not found.`)
            return null;
        };

        if (data === root.data) return 0;

        if (data > root.data) {
            let result = this.depth(data, root.right);
            if (result) return result + 1;

            return result;
        } else if (data < root.data) {
            let result = this.depth(data, root.left);
            if (result) return result + 1;

            return result;
        }
    }

    depthItr(data, root = this.root) {
        let count = 0;
        
        while (root !== null) {
            if (data > root.data) {
                root = root.right;
                count++;
            } else if (data < root.data) {
                root = root.left;
                count++;
            } else {
                return count;
            }
        }

        console.log(`${data} not found.`)
        return null;
    }

    isBalanced() {
        let leftHeight = this.height(this.root.left);
        let rightHeight = this.height(this.root.right);

        if (Math.abs(leftHeight - rightHeight) <= 1) return true;
        return false;
    }

    rebalance() {
        let values = this.inorder();
        this.root = this.buildTree(values);
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

/**
 * Takes a Node object and logs node.data to the console
 * @param {Object} node 
 */
function logValue(node) {
    console.log(node.data)
}

/*
 * TESTING:
 */

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 40, 55, 88, 77, 121, 574, 86, 165, 123, 744, 753];

let myTree = new Tree(array);

prettyPrint(myTree.root);
console.log('isBalanced: ' + myTree.isBalanced());

// Print out elements in level, pre, post and inorder
console.log('== PRINT ==');
console.log('level:');
console.log(myTree.levelOrderRec())
console.log('preorder:');
console.log(myTree.preorder())
console.log('postorder:');
console.log(myTree.postorder())
console.log('inorder:');
console.log(myTree.inorder())

// Imbalance the tree
myTree.insert(323);
myTree.insert(322);
myTree.insert(321);
myTree.insert(320);

prettyPrint(myTree.root);
console.log('isBalanced: ' + myTree.isBalanced());

console.log('== REBALANCE ==');
myTree.rebalance();

prettyPrint(myTree.root);
console.log('isBalanced: ' + myTree.isBalanced());

// Print out elements in level, pre, post and inorder
console.log('== PRINT ==');
console.log('level:');
console.log(myTree.levelOrderRec())
console.log('preorder:');
console.log(myTree.preorder())
console.log('postorder:');
console.log(myTree.postorder())
console.log('inorder:');
console.log(myTree.inorder())