# Recursion assignments
From [here](https://www.theodinproject.com/lessons/javascript-recursion)

## Assignment 1: Fibonacci recursion
From [here](https://www.theodinproject.com/lessons/javascript-recursion). I already encountered this problem and solving a large Fibonacci number with recursion will block the stack. So I actually want to use this opportunity to practice dynamic programming. 

Solving the fibonacci sequence recursively will block the stack, as you're basically just recalculating the same numbers repeatedly until you finally reach `n` values. If you do `fib(500)` you'll be waiting a while.

Because fibonacci numbers follow `c = a + b`, this lends itself to using the starting values `a` and `b` to solve the entire chain. This will be way faster than doing the math for the same numbers over and over again. Otherwise, you'll be doing `0 + 1 = 1`, `1 + 1 = 2`, `1 + 2 = 3`... across multiple different function calls, which means you'll be doing duplicate calculations each time.

So I want to practice a bottom-up dynamic programming approach.

I want to break down the problem into its most basic starting points, then use the data that already exists to solve subsequent fibonacci numbers until `n`. My goal is to create each fibonacci number only once, whereas recursion would calculate the same number multiple times, as numbers are produced by function calls.

The second half of the task was:

> Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

I personally don't know how you could (tidily) do this in 1 or 2 lines. A lot of stuff needs to happen. If we were only returning a SINGLE fibonacci value, then it would be easy, but returning an array means you have to wrangle JavaScript a bit.

## Assignment 2: Merge Sort
1. Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
2. Tips:
    - Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same method!).
    - It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

I wanted to use `.splice` but didn't want to mutate any arrays, because it's better practice to work as if arrays are immutable (e.g. in React). So, I decided to make a copy of the array argument with every subcall, which has a memory cost associated with it, but hopefully it's an acceptable approach.