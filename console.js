console.log(hello)
 <Script>   
 function updateCustomClock() {
  const now = new Date(1000);
    }   
     document.getElementById('live-clock').textContent = now.toLocaleTimeString();
     }      
         setInterval(updateCustomClock, 1000);

            const ampm = hours >= 12 ? 'pm':'am';
            hours = hours % 12;
          
