/* Task:

 - For each item in the items array, create a div with a class of "checklist-item", 
 which contains a checkbox input and corresponding label.
 - Make sure that the shopping list can render a checkbox for all the items, even if new 
 items are added to the items array.
 
 */

const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

function createList(listItem) {
    for (let i = 0; i < listItem.length; i++) {

        //div
        let checklistItem = document.createElement("div");
        //add class to div
        checklistItem.classList.add("checklist-item");

        //input
        let checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.id = 'checklist';
        checkbox.name = 'checklist';
        checkbox.value = 'item';
 
        //label
        let label = document.createElement('label');
        label.htmlFor = 'item';
        label.appendChild(document.createTextNode(listItem[i]));
        
        //add input and label into checklist-item
        checklistItem.appendChild(checkbox);
        checklistItem.appendChild(label);

        //add checklist-item to checklist
        checklist.appendChild(checklistItem);
    }
}


createList(items);

//this would look like:
// <div class="checklist-item">
//     <input type="checkbox" id="checklist" name="checklist" value="any-item">
//     <label for="checklist">every item added</label> 
// </div>


// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.


/*

HTML:

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>Christmas Shopping List</h1>
        <div class="checklist" id="checklist">
            <!-- recreate this, basically -->
            <!-- <div class="checklist-item">
                <input type="checkbox" id="checklist" name="checklist" value="any-item">
                <label for="checklist">every item added</label> 
             </div> -->
        </div>

        <script src="index.pack.js"></script>
    </body>
</html>

--------

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
    color: var(--snow);
    background-color: var(--bright-red);
}

.checklist {
    color: var(--dark-green);
    display: flex;
    justify-content: center;
    align-items:  center;
    flex-direction: column;
    min-width: 200px;
    min-height: 200px;
    max-width: 5ch;
    background: var(--snow);
    padding: 1em 2em;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.checklist-item {
    margin: 0.5em;
    width: 100%;
    text-align: left;
    font-weight: bold;
}

input[type=checkbox]:checked + label.strikethrough{
  text-decoration: line-through;
  font-weight: normal;
}

// new:
label {
    margin: 0.3em;
}



*/