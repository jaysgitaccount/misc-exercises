const timer = document.getElementById('container');
const counter = timer.querySelector('.time');
const startButton = timer.querySelector('.start');
const pauseButton = timer.querySelector('.pause');
const resetButton = timer.querySelector('.reset');

let timeoutId;
let runningTime = 0;
let storedTime = 0;

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Set display time on load
setCounterText(0);

function startTimer() {
    const startTime = new Date();

    // Disable start button
    disableStartButton(true);

    timeoutId = setInterval(() => {
        const currentTime = new Date();

        // Use existing values
        runningTime = storedTime + (currentTime - startTime);
        setCounterText(runningTime);
    }, 1);
}

function pauseTimer() {
    // Suspend addition of current time
    clearInterval(timeoutId);
    // Save the value
    storedTime = runningTime;
    
    disableStartButton(false);
}

function resetTimer() {
    // Reset current time, stop the interval
    runningTime = 0;
    storedTime = 0;
    setCounterText(runningTime);
    pauseTimer();
}

function setCounterText(time) {
    counter.textContent = formatTime(time);
}

function formatTime(ms) {
    // HH:MM:SS:MMM
    let milliseconds = ms % 1000;

    let totalSec = ((ms - milliseconds) / 1000);
    let seconds =  totalSec % 60;

    let totalMinutes = (totalSec - seconds) / 60;
    let minutes = totalMinutes % 60;

    let hours = (totalMinutes - minutes) / 60;

    // Format time values
    let pad = (n, z = 2) => ('00' + n).slice(-z);

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`
}

function disableStartButton(isDisabled) {
    startButton.disabled = isDisabled;
}