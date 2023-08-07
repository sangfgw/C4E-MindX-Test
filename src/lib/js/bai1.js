// Form
const domForm = document.getElementById("square_number_form");

// Input
const domInputA = document.getElementById("square_number_input_a");
const domInputB = document.getElementById("square_number_input_b");

// Result Div
const domResultDiv = document.getElementById("result");

// Handle Form Submit Event
domForm.addEventListener("submit", (ev) => {
    // Prevent Default Form Event
    ev.preventDefault();

    // Get Value From Input And Convert It Into Int Data Type
    const numA = Number(domInputA.value);
    const numB = Number(domInputB.value);

    // Using Function
    console.log(squareNumberList(numA, numB));
    domResultDiv.innerHTML = `<br><h1>Các số chính phương trong khoảng ${numA} đến ${numB}:</h1>${squareNumberList(numA, numB).join(" ")}`
});

// Function: Square Number Array Range
const squareNumberList = (rangeA, rangeB) => {
    const squareNumberList = [];

    // Handle Find Square Number In Range A To B
    for (let i = 0; i < rangeB; i++) {
        if (Math.pow(i, 2) > rangeA && Math.pow(i, 2) < rangeB) {
            squareNumberList.push(Math.pow(i, 2));
        }
    }
    
    return squareNumberList;
}