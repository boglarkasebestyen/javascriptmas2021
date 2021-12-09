// Task:
// - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
// - Run the function when the Fix button is clicked.
  
const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");
const container = document.getElementsByClassName("container")[0];
let needsFix = true;

greeting.innerHTML = getLabel();
btn.innerHTML = getButtonText();

function getLabel() {
    return needsFix ? "🎃 Merry Christmas! 👻" : "🎅 Happy Holidays! ☃️";
}

function getButtonText() {
    return needsFix ? "fix!" : "go back?";
}

function fix() {
    //toggle
    container.classList.toggle("container"); 
    container.classList.toggle("newTheme"); //from CSS
    needsFix = !needsFix; 
    
    greeting.innerHTML = getLabel();
    btn.innerHTML = getButtonText();
}

btn.innerHTML = getButtonText();
btn.onclick = fix;

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.


/*

HTML:

<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas&family=Rubik+Beastly&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <div class="container">
            <p id="greeting"></span></p>
            <button id="btn"></button>
        </div>
        <script src="index.pack.js"></script>
    </body>
</html>

-----------------

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

body,
.container {
    display: flex;
    justify-content: center;
    align-items: center
}

body {
    background-color: var(--light-green);
    height: 100vh;
}

.container {
    background: var(--snow);
    flex-direction: column;
    border-radius: 10px;
    padding: 1em;
    min-width: 550px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    font-size: 45px;
    font-family: 'Rubik Beastly', cursive;
    color: var(--bright-red)
}

button {
    padding: 1em 2em;
    border: none;
    font-size: 20px;
    background-color: var(--bright-red);
    color: var(--snow);
    border-radius: 999px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

button:hover {
    cursor: pointer;
    background-color: var(--wine-red);
}

.newTheme {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #fff;
    background-image: url("https://wallpapercave.com/wp/XddYz6X.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    padding: 1em;
    min-width: 550px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    font-size: 45px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

}

*/




