const passwordField = document.getElementById("password");
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");
const lengthInput = document.getElementById("length");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_-+=<>?/{}[]";

function createPassword() {
  let length = lengthInput.value || 12; // Default length if input is empty
  let allChars = upperCase + lowerCase;

  if (includeNumbers.checked) allChars += numbers;
  if (includeSymbols.checked) allChars += symbols;

  let pass = "";
  pass += upperCase[Math.floor(Math.random() * upperCase.length)];
  pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];

  if (includeNumbers.checked)
    pass += numbers[Math.floor(Math.random() * numbers.length)];
  if (includeSymbols.checked)
    pass += symbols[Math.floor(Math.random() * symbols.length)];

  while (pass.length < length) {
    pass += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordField.value = pass;
}

function copyToClipboard() {
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

generateBtn.addEventListener("click", createPassword);
copyBtn.addEventListener("click", copyToClipboard);
