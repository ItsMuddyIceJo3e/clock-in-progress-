console.log("hello");

function updateCustomClock() {
  const now = new Date();
  document.getElementById('live-clock').textContent = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

const now = new Date();
const timeString = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
  timeZoneName: 'short'
}).format(now);

document.getElementById('live-clock').textContent = timeString;

const button = document.getElementById('button');

function firstaction() {
  document.body.style.backgroundColor = 'black';
}

function secondaction() {
  document.body.style.backgroundColor = 'white';
}

if (button) {
  button.addEventListener('click', firstaction);
  button.addEventListener('click', secondaction);
}

updateCustomClock();
setInterval(updateCustomClock, 1000);

