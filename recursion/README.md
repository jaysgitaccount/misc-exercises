# Fibonacci recursion
From [here](https://www.theodinproject.com/lessons/javascript-recursion). I already encountered this problem and solving a large Fibonacci number with recursion will block the stack. So I actually want to use this opportunity to practice dynamic programming instead. 

Solving the fibonacci sequence recursively will block the stack, as you're basically just recalculating the same numbers repeatedly until you finally reach `n` values. If you do `fib(500)` you'll be waiting a while.

Because fibonacci numbers follow `c = a + b`, this lends itself to using the starting values `a` and `b` to solve the entire chain. This will be way faster than doing the math for the same numbers over and over again. Otherwise, you'll be doing `0 + 1 = 1`, `1 + 1 = 2`, `1 + 2 = 3`... across multiple different function calls, which means you'll be doing duplicate calculations each time.

So I would rather practice something more useful, which is a bottom-up dynamic programming approach.

I want to break down the problem into its most basic starting points, then use the data that already exists to solve subsequent fibonacci numbers until `n`. My goal is to create each fibonacci number only once, whereas recursion would calculate the same number multiple times, as numbers are produced by function calls.

