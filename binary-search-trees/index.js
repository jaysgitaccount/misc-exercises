class Node {
    constructor(data) {
        this.data = data || null;
        this.left = null;
        this.right = null;
    }
}

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

    insert(data, root = this.root) {
        // compare data to root.data
        // if ===, duplicate node: return existing node
        // if >, go right
        // if <, go left
        // if current === null, insert here
    }

    delete(data) {
        const deleteBound = deleteNode.bind(this);
        this.root = deleteBound(data, this.root);

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
                    root.data = this.getMinValue(root.right).data;
                    root.right = deleteBound(root.data, root.right);
                }
            }
            return root;
        }
    }

    getMinValue(root = this.root) {
        // Get the smallest value in a subtree
        if (root === null) return;
        if (root.left === null) return root;

        return this.getMinValue(root.left);
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

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 40, 55, 88, 77, 121, 574];

let myTree = new Tree(array);
prettyPrint(myTree.root);

myTree.delete(88);
prettyPrint(myTree.root);