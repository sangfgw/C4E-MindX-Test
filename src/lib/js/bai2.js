// Form
const domForm = document.getElementById("color_picker_form");

// Color Picker Input
const domColorPickerInput = document.getElementById("color_picker_input");
domColorPickerInput.addEventListener("input", (ev) => {
    // Assign To Hex Input
    domHexInput.value = ev.target.value;

    // Change Background Color
    changeBackgroundColor(ev.target.value);
});

// Hex Input
const domHexInput = document.getElementById("hex_color_input");
domHexInput.value = domColorPickerInput.value;

// Copy Hex Button
const domCopyHexBtn = document.getElementById("copy_hex_color");
domCopyHexBtn.addEventListener("click", async(ev) => {
    // Copy Hex Color
    copyToClipBoard(domHexInput.value);

    // Alert Copied Value
    alert("Copied the hex color: " + domHexInput.value);
});

// Random Color Submit
domForm.addEventListener("submit", (ev) => {
    // Prevent Default Form Submit Behaviour
    ev.preventDefault();

    // Random Color
    const randomHexColor = randomColor();

    // Assign To Color Picker Input
    domColorPickerInput.value = randomHexColor;

    // Assign To Hex Input
    domHexInput.value = randomHexColor;

    // Change Backgroundd Color
    changeBackgroundColor(randomHexColor);
})

// Function: Copy To Clipboard
const copyToClipBoard = (text) => {
    navigator.clipboard.writeText(text);
}

// Function: Random Color -> Return String Hex Color
const randomColor = () => {
    const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = '#';

    // Hex Color Contain 6 Characters
    for (let i = 0; i < 6; i++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColor += hexCharacters[randomPosition];
    }

    return hexColor;
}

// Function: Change Body Background Based On Hex Color
const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
}

// Change Background Color Once
changeBackgroundColor(domColorPickerInput.value);
