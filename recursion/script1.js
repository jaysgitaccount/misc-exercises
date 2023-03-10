        // Take number, return an array containing n numbers from the fibonacci sequence.
        // e.g. fibs(n) = [0, 1, 1, 2, 3, 5, 8, 13]
 
        // The first two values are a = 0 and b = 1
        // If c = a + b, then a = first, b = second, c = third
        // Using this, we want to shift a, b and c "up" the fibonacci chain until we hit n values, then return that array
        // Use a for loop with i = 3 because a and b are the first and second values
        // within the loop:
        // c is generated each time, as a result of a + b. a and b persist between loops
        // store c in the array
        // then, we discard the oldest value and move a and b up by 1 fibonacci number.
        function fibs(n) {
            let a = 0;
            let b = 1;
            let array = [0, 1];

            if (n === 1) return a;
            if (n === 2) return array;

            for (let i = 3; i <= n; i++) {
                // Add numbers
                let c = a + b;

                // Store the result
                array.push(c);

                // Reassign values, discarding smallest number
                a = b;
                b = c;
            }

            return array;
        }

        // Same as before, return array
        // get the last values from the result of the 2 recursive calls
        // add this value together, then push the new value to the array and return this combined array

        function fibsRec(n) {
            let array = [];
            // case 1: base cases
            if (n <= 1) return [0]
            if (n === 2) return [0, 1]

            // Get results
            let a = fibsRec(n-2);
            let b = fibsRec(n-1);
            let c = a[a.length - 1] + b[b.length - 1]

            // Add all results so far to array
            array.push(...b);
            array.push(c)

            return array;
        }

        // Due to the way JS handles array typing, we can't do b.push(c) because b's type is Object.