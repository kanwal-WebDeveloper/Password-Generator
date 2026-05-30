const passwordBox = document.getElementById("password");

const lengthRange = document.getElementById("lengthRange");

const lengthValue = document.getElementById("lengthValue");

const uppercaseCheck = document.getElementById("uppercase");

const lowercaseCheck = document.getElementById("lowercase");

const numbersCheck = document.getElementById("numbers");

const symbolsCheck = document.getElementById("symbols");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+?><:{}[]";

/* RANGE */

lengthRange.addEventListener("input", () => {

    lengthValue.innerText = lengthRange.value;

});

/* GENERATE PASSWORD */

function createPassword() {

    let allChars = "";

    if (uppercaseCheck.checked) {
        allChars += upperCase;
    }

    if (lowercaseCheck.checked) {
        allChars += lowerCase;
    }

    if (numbersCheck.checked) {
        allChars += numbers;
    }

    if (symbolsCheck.checked) {
        allChars += symbols;
    }

    if (allChars === "") {

        alert("Select at least one option");

        return;
    }

    let password = "";

    for (let i = 0; i < lengthRange.value; i++) {

        password += allChars[
            Math.floor(Math.random() * allChars.length)
        ];
    }

    passwordBox.value = password;
}

/* COPY PASSWORD */

function copyPassword() {

    if (passwordBox.value === "") return;

    navigator.clipboard.writeText(passwordBox.value);

    alert("Password Copied!");
}
