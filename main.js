let start = document.getElementById('start');
let stop = document.getElementById('stop');
let snooze = document.getElementById('snooze');
let snoozed = document.getElementById('snoozed');

// Add an event listener to the submit button
start.addEventListener('click', setAlarm);
stop.addEventListener('click', stopAlarm);
snooze.addEventListener('click', snoozeAlarm);
let audio = new Audio('aryan9.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

function stopAlarm(e) {
    e.preventDefault();
    audio.pause();
}

function snoozeAlarm(e) {
    e.preventDefault();
    setTimeout(function () {
        ringBell();
    }, (snoozed.value*60*1000));
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    let date = document.getElementById('date');
    let month = document.getElementById('month');
    let year = document.getElementById('year');
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    alarmDate = new Date(`${year.value}-${month.value}-${date.value} ${hour.value}:${minutes.value}:${seconds.value}`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }
}
