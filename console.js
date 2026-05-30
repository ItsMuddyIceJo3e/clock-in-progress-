console.log("hello");

function updateCustomClock() {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  const ampm = hour >= 12 ? 'pm':'am';
  hour = hour % 12 || 12;
  document.getElementById('live-clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
}
  
  const now = new Date();
  const timeString = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  });

  document.getElementById('live-clock').textContent = timeString.format(now);

  updateCustomClock(); // initial call to display clock immediately

   setInterval(updateCustomClock, 1000);

