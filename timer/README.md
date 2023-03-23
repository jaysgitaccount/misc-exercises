# Timer

Using vanilla HTML, CSS, JS.

Make a timer with a start and stop button.

Requirements:
- Display elapsed time
- Format elapsed ms properly
- Have a start button
- Have a stop button
- Have a reset button

Different tasks:
- without pause button
- with pause button (and reset button)
- Stop user from being able to make duplicate timers
    - disable start button
    - use a variable to track if there's already a timeout or not.

This task seems to be more about working with `setTimeout`/`setInterval` rather than working with the JavaScript Date/Time API.

## Notes

There are many ways to format an amount of milliseconds.
- Can use `Date.prototype.toISOString().slice(11, -1)`
- Can use `%` operator and `Math.floor`

This inscrutable code from [here](https://stackoverflow.com/questions/9763441/milliseconds-to-time-in-javascript):

    function msToTime(s) {
        // Pad to 2 or 3 digits, default is 2
    var pad = (n, z = 2) => ('00' + n).slice(-z);
    return pad(s/3.6e6|0) + ':' + pad((s%3.6e6)/6e4 | 0) + ':' + pad((s%6e4)/1000|0) + '.' + pad(s%1000, 3);
    }

    // Current hh:mm:ss.sss UTC
    console.log(msToTime(new Date() % 8.64e7))

This function uses scientific numbers to get the time values without storing any variables. It's pretty hard to read, but the `pad` function is really good.

    function msToTime(ms) {
        // Calculate the time here

        // Pad to 2 or 3 digits, default is 2
        let pad = (n, z = 2) => ('00' + n).slice(-z);
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`
    }

    function pad(n, z = 2) {
        return ('00' + n).slice(-z);
    }

- Negative slice meeans you're slicing from the END. So you're adding the string `00` to the front of `n`, then slicing from the end by `z` letters. If `z = 2` and `n = 5`, you'll get `005`, then take the last 2 digits for `05`. Actually pretty smart but kind of wild to read this example.

Using `setInterval(function, 1)` (1ms interval) is CLEARLY not accurate. Is there a way for me to have a functional pause button while getting the different between the current time and the start time? That's the most accurate way because it uses real time. The issue is that you can't really pause it.