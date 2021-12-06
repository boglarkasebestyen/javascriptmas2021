// Task:
// - Get today's date (you only need the day).
// - Calculate remaining days.
// - Display remaining days in countdownDisplay.

function renderCountdown() {
  // const christmas = 25;
  let christmas = new Date("12/24/2021 00:00:00");
  let christmasInMill = christmas.getTime();
  console.log("christmas in milliseconds is always: " + christmasInMill);   

      
  const currentDate = new Date();
  let currentTimeInMill = currentDate.getTime();
  console.log("current time is: " + currentTimeInMill)
  
  let timeTillXmasInMill = (christmasInMill - currentTimeInMill);
  
  console.log("time till xmas in milliseconds is: " + timeTillXmasInMill); 
  let result = Math.round(timeTillXmasInMill / 86400000); //86400000 milliseconds in a day to get the nr of days
  console.log("time till xmas in days is: " + result); 
  return result;
}

let countdownDaysDisplay = document.getElementById("countdown-days-display");
countdownDaysDisplay.innerHTML = renderCountdown();
              
/*HTML:

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>Christmas Countdown 🎄</h1>
        <div class="container">
            <p id="countdown-days-display" class="countdown-days-display"></p>
            <p class="countdown-text">Days 'til Christmas!</p>
            <!-- <p class="countdown-text">Countdown:</p> -->
            <!-- <p id="countdown-hours-display" class="countdown-hours-display"></p> -->
        </div>
        <script src="index.pack.js"></script>
    </body>
</html>


CSS:

:root {
  --wine-red: #C7375F;
  --bright-red: #D42D2F;
  --dark-green: #344D2F;
  --light-green: #77A047;
  --gold: #FAC57D;
  --snow: #F0F4F7;
}

html, body {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    color: var(--dark-green);
    background-color: var(--snow);
}

.container {
    display: flex;
    flex-direction: column;
    background: var(--wine-red);
    color: var(--snow);
    padding: 1em 2em;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.countdown-text {
    font-size: 20px;
    padding: 10px;
    margin: 0;
}

.countdown-days-display {
    font-size: 100px;
    margin: 0;
}

.countdown-hours-display {
    font-size: 60px;
    margin: 0;
}

*/