// Variable to store the timer interval
let timer;
// Variable to track whether the stopwatch is running
let running = false;
// Variable to store the elapsed seconds
let seconds = 0;

// Function to start or pause the stopwatch
function start() {
    if (!running) {
        // If the stopwatch is not running, start it
        timer = setInterval(updateDisplay, 1000);
        running = true;
        document.getElementById("startBtn").textContent = "Pause";
    } else {
        // If the stopwatch is running, pause it
        clearInterval(timer);
        running = false;
        document.getElementById("startBtn").textContent = "Resume";
    }
}

// Function to stop the stopwatch
function stop() {
    clearInterval(timer);
    running = false;
    document.getElementById("startBtn").textContent = "Start";
}

// Function to reset the stopwatch
function reset() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    updateDisplay();
    document.getElementById("startBtn").textContent = "Start";
}

// Function to update the display with the current time
function updateDisplay() {
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const displayTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds % 60);
    document.getElementById("display").textContent = displayTime;
    seconds++;
}

// Function to format time values to ensure they have two digits
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
