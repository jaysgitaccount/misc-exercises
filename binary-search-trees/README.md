# Binary Search Trees

Assignment from [The Odin Project: JavaScript course](https://www.theodinproject.com/lessons/javascript-binary-search-trees).

We will build a balanced BST. The instructions say not to use duplicate values because they make it way more complicated and result in trees that are much harder to balance. So, remove duplicates or check for an existing value before inserting.

## Nicely seeing BSTs in the console

```JS
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}
```

## Notes

- Let's look into how to handle duplicate values with balanced BSTs later.
- I used merge sort for this assignment, but I'd like to look into any better sorting algorithms that can sort/remove duplicate values.