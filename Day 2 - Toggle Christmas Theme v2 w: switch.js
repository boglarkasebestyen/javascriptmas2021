// Task:
// - Add the functionality to switch the theme between 'Christmas' and 'snow'.
// - Turn the radio buttons into a toggle switch.

const body = document.getElementById("body");
const greeting = document.getElementById("greeting")
const toggleBtn = document.getElementById("checkbox");
let slideFor = document.getElementById("slideFor");
let isChristmas = true; //now we have full control over it because it only depends on this boolean
let isGreeting = true;

slideFor.innerHTML = getLabel();
greeting.innerHTML = getGreeting();

function getLabel() {
    return isChristmas ? "Slide for snow ☃️" : "Slide for Christmas 🎅";
}

function getGreeting() {
    return isGreeting ? "Merry Christmas!" : "...and a happy new year!";
}

function myToggle() {
    //toggle between the two classes
    //if we remove classList.toggle("christmasBody"); it only changes the card not the whole body
    body.classList.toggle("christmasBody"); 
    body.classList.toggle("snowBody"); //from CSS
    isChristmas = !isChristmas; //it's snow after toggling
    isGreeting = !isGreeting;
        
    //slideFor.innerHTML = isChristmas ? "Slide for snow ☃️" : "Slide for Christmas 🎅";
    //or better:
    slideFor.innerHTML = getLabel(); //+ call getLabel() with slideFor: slideFor.innerHTML = getLabel();
    greeting.innerHTML = getGreeting();

    
}

toggleBtn.onclick = myToggle;

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.

/*
HTML:

<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&family=Mountains+of+Christmas:wght@700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="index.css">
    </head>
    <body class="christmasBody" id="body">
        
        <div class="container">
            <!-- removed Santa head from greeting msg -->
            <p id="greeting"></p>
            
             <!-- christmas radio container -->
             <!-- Rounded switch -->
            <label class="switch">
                <input id="checkbox" type="checkbox">
                <span class="slider round"></span>
            </label>
            <!-- removed "Slide for snow ☃️" -->
            <span id="slideFor"></span>

            
            <!-- <div class="radio-container">
                <input type="radio" id="christmas" name="theme" value="christmas" checked>
                <label for="christmas">Christmas 🎅</label> 
            </div> -->
            
            <!-- snow radio container -->
            <!-- <div class="radio-container">
                <input type="radio" id="snow" name="theme" value="snow">
                <label for="snow">Snow ☃️</label>
            </div> -->
   
        </div>
        
        <script src="index.pack.js"></script>
        
    </body>
</html>

*/

/*

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
    align-items: center;
}

body {
    background-color: var(--wine-red);
    height: 100vh;
}

.container {
    background: var(--snow);
    flex-direction: column;
    border-radius: 10px;
    padding: 3em;
    min-width: 350px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    opacity: 0.9;
}

p {
    font-size: 45px;
}

//  .radio-container {
//     width: 200px;
//     font-size: 22px;
// } 

.christmasBody {
    font-family: 'Mountains of Christmas', cursive;
    color: var(--dark-green);
    background-color: var(--wine-red);
    background-image: url("https://wallpapercave.com/wp/wp4376014.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

// we'll toggle to this class; it does not appear in HTML by default
.snowBody {
     // font-family: 'Lobster Two', cursive; 
    font-family: 'Mountains of Christmas', cursive;
    color: var(--snow);
    background-color: var(--snow);
    background-image: url("https://wallpapercave.com/wp/wp5050588.gif");
    background-repeat: no-repeat;
    background-size: cover;
}

// snowBody's container 
.snowBody .container {
    background-color: #c1dcff; 
    flex-direction: column;
    border-radius: 10px;
    padding: 3em;
    min-width: 350px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    opacity: 0.9;
}

#slideFor {
    margin: 0.5em;
    font-size: 1.4em;
}


 // toggle implementation 

 // The switch - the box around the slider 
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

 // Hide default HTML checkbox 
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

 // The slider 
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

 // Rounded sliders 
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

*/


