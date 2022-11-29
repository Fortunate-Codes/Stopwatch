
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById("play");
const stop_btn = document.getElementById("pause");
const reset_btn = document.getElementById("reset");

let counters = 0;
let interval = null;

//Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", pause);
reset_btn.addEventListener("click", reset);


// Update the timer {
function timer() {
    counters++;

    //format our time
    let hrs = Math.floor(counters / 3600);
    let mins = Math.floor((counters - (hrs * 3600)) / 60);
    let secs = counters % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;
    time_el.innerText = `${hrs}:${mins}.${secs}`;
}

function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
}

function pause() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    counters = 0;
    time_el.innerText = '00:00.00';
}

const flag_btn = document.getElementById("flag");
const lapSection = document.querySelector('.lap');

flag_btn.addEventListener('click', function () {
    lapItem = document.createElement('span');
    lapItem.innerText = time_el.innerText;
    lapSection.appendChild(lapItem);
});
