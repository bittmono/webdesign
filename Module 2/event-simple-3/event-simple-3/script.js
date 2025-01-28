// Function to be executed when the button is clicked
function changeText() {
    // Get the paragraph element by its ID
    let textElement = document.getElementById("textToChange");

    // Change the inner HTML of the paragraph
    textElement.innerHTML = "<strong>Text Changed!</strong>";
}

// Get the button element by its ID
let buttonElement = document.getElementById("changeTextButton");

// Attach a click event listener to the button, specifying the function to be executed
buttonElement.addEventListener("click", changeText);
