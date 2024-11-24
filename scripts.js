/****************** YOUR NAME: Naya Bektenova

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
let modelName = "XYZ";
let duration = 0;




/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    if (!costLabel) {
        console.error("Error: Element with ID 'calculated-cost' not found.");
        return;
    }

    let cost = 0;
    if (modelName === "XYZ") {
        cost = duration * 100;
    } else if (modelName === "CPRG") {
        cost = duration * 213;
    }

    costLabel.innerHTML = cost.toFixed(2);
}



/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

function changeModel() {
    console.log("Switching model...");
    let modelText = document.getElementById("model-text");
    if (!modelText) {
        console.error("Error: Element with ID 'model-text' not found.");
        return;
    }

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}



/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
function changeDuration() {
    console.log("Changing duration...");
    let durationText = document.getElementById("duration-text");
    if (!durationText) {
        console.error("Error: Element with ID 'duration-text' not found.");
        return;
    }

    let newDuration = prompt("Enter the number of days you'd like to book:");

    if (!isNaN(newDuration) && newDuration >= 0) {
        duration = parseInt(newDuration);
    } else {
        alert("Please enter a valid positive number for duration.");
        return;
    }

    durationText.innerHTML = duration;

    recalculate();
}

// I added this block to make sure the event listeners only get attached after
// the page has fully loaded. By wrapping the event listener setup inside the
// 'DOMContentLoaded' event, I'm making sure the buttons ('model-button' and
// 'duration-button') are actually available in the DOM before trying to add
// the listeners. This prevents errors that would happen if the script tried
// to interact with the buttons before they exist on the page. It's just a
// safer way to make sure everything works as expected once the page is ready.

document.addEventListener("DOMContentLoaded", function() {
    let modelButton = document.getElementById("model-button");
    if (modelButton) {
        modelButton.addEventListener("click", changeModel);
    } else {
        console.error("Error: Element with ID 'model-button' not found.");
    }

    let durationButton = document.getElementById("duration-button");
    if (durationButton) {
        durationButton.addEventListener("click", changeDuration);
    } else {
        console.error("Error: Element with ID 'duration-button' not found.");
    }
});