const passwordInput = document.querySelector(".password-box input"),
    copyIcon = document.querySelector(".password-box i"),
    rangeInput = document.querySelector(".range-box input"),
    sliderNumber = document.querySelector(".range-box .slider-number"),
    generateButton = document.querySelector(".generate-button");

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

// Function to generate password
const generatePassword = () => {
    let newPassword = "";

    for (let i = 0; i < rangeInput.value; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomIndex];
    }

    passwordInput.value = newPassword;

    // Update icon to copy state
    copyIcon.classList.remove("bxs-file-doc");
    copyIcon.classList.add("bx-copy-alt");
};

// Event listener for range input to update password length
rangeInput.addEventListener("input", () => {
    sliderNumber.innerText = rangeInput.value;
    generatePassword();
});

// Copy password to clipboard on icon click
copyIcon.addEventListener("click", () => {

    navigator.clipboard.writeText(passwordInput.value);


    // Change icon to indicate copy success
    copyIcon.classList.remove("bx-copy-alt");
    copyIcon.classList.add("bxs-file-doc");


});

// Generate password on button click
generatePassword();
generateButton.addEventListener("click", generatePassword);

// Generate initial password on page load

