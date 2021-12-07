// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

const body = document.getElementById("body");
const christmasBtn = document.getElementById("christmas");
const snowBtn = document.getElementById("snow");


function myToggle() {
    //if we remove classList.toggle("christmasBody") it only changes the card, not the whole body
    body.classList.toggle("christmasBody"); 
    body.classList.toggle("snowBody"); 
}

christmasBtn.onclick = myToggle; 
snowBtn.onclick = myToggle;


/*
HMTL:

<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&family=Mountains+of+Christmas:wght@700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="index.css">
    </head>
    <body class="christmasBody" id="body">
        
        <div class="container">
            <p id="greeting">🎅 Merry Christmas!</p>
            
             <!-- christmas radio container -->
            <div class="radio-container">
                <input type="radio" id="christmas" name="theme" value="christmas" checked>
                <label for="christmas">Christmas 🎅</label> 
            </div>
            
            <!-- snow radio container -->
            <div class="radio-container">
                <input type="radio" id="snow" name="theme" value="snow">
                <label for="snow">Snow ☃️</label>
            </div>
            
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

.radio-container {
    width: 200px;
    font-size: 22px;
}

.christmasBody {
    font-family: 'Mountains of Christmas', cursive;
    color: var(--dark-green);
    background-color: var(--wine-red);
    background-image: url("https://wallpapercave.com/wp/wp4376014.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

//we'll toggle with this class
.snowBody {
    // font-family: 'Lobster Two', cursive; 
    font-family: 'Mountains of Christmas', cursive;
    color: var(--snow);
    background-color: var(--snow);
    background-image: url("https://wallpapercave.com/wp/wp5050588.gif");
    background-repeat: no-repeat;
    background-size: cover;
}

//snowBody's container
.snowBody .container {
    background-color: #c1dcff; 
    flex-direction: column;
    border-radius: 10px;
    padding: 3em;
    min-width: 350px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    opacity: 0.9;
}


*/




















*/
