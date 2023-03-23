// I want to practice memoization!

// Task: using memoization, make a function that prints out all fibonacci numbers up to the nth number in the fibonacci sequence
// Make 1 ver that prints ALL numbers and 1 ver that only returns the nth fibonacci number

// Then, do the same but make a function that returns the result for factorial of n (n!). The factorial of n is 1 * 2 * 3 * 4 * 5 ... etc all the way up to n.

// Starting at 0 as the first number
// 0, 1, 1, 2, 3, 5, 8, 13...
// Fibonacci: fib(n) = fib(n - 1) + fib(n - 2)

// This is NOT a recursive function. It is more like dynamic programming. It also doesn't need memoization to be honest.
function fibonacciSequence(n) {
    // If someone enters 1 or less, they get 1
    if (n <= 1) return [0];
    // We just have to hard code the first 2 numbers
    if (n === 2) return [0, 1];

    let resultArray = fibonacciSequence(n - 1);
    let newValue = resultArray[resultArray.length - 1] + resultArray[resultArray.length - 2];
    resultArray.push(newValue);

    return resultArray;
}

// Recursive function using memoization to avoid duplicate calculations
function fibonacci(n, memo) {
    // Memo is an empty object if no memo is passed
    memo = memo || {};

    if (memo[n]) return memo[n];

    // fib(1) = 1, fib(2) = 1
    if (n <= 2) return memo[n] = 1;

    // Otherwise, calculate
    let result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    
    // Add the result to memo before returning
    return memo[n] = result;
}

// Turns out factorial doesn't really need memoization
function factorial(n) {
    if (n === 1) return 1;

    return n * factorial(n - 1);
}

// factorial with a loop, just for practice
function factorialItr(n) {
    let result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }
    return result;
}

// Recursive fibonacci using an array cache. cache[0] = 0, cache[1] = 1, cache[2] = 1, basically replicating fibonacci indices.
let cacheArray = [0, 1];

function fibonacciCache(n) {
    if (n < 1) return cacheArray[0];
    if (cacheArray[n]) return cacheArray[n];

    return cacheArray[n] = fibonacciCache(n - 1) + fibonacciCache(n - 2);
}

// The same thing but with an internal array cache, like the memo example
function fibCache(n, cache) {
    cache = cache || [0, 1];

    if (n < 1) return cache[0];
    if (cache[n]) return cache[n];

    return cache[n] = fibCache(n - 1, cache) + fibCache(n - 2, cache);
}

console.log(fibCache(6))