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

const blackButton = document.createElement('button');
blackButton.textContent = 'Change Background Color';
blackButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'black';
});

const whiteButton = document.createElement('button');
whiteButton.textContent = 'Change Background Color';
whiteButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
});

document.body.append(blackButton, whiteButton);

updateCustomClock();
setInterval(updateCustomClock, 1000);
