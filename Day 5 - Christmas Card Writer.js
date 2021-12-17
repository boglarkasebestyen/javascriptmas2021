// Task:
// Write a function to display a random greeting in the card.

let greetingDisplay = document.getElementById("greeting-display");
const btn = document.getElementById("btn");

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
];

function writeGreeting(wishesArr) {
    return greetingDisplay.innerHTML = wishesArr[Math.floor(Math.random() * wishesArr.length)];
};
    
// old, gave error: EventTarget.addEventListener: Argument 2 is not an object: 
// btn.addEventListener("click", writeGreeting(greetings));
btn.onclick = function() {writeGreeting(greetings)};

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.