// Assignment code here
var generatePassword = function () {
  var length = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  console.log(length)

  var uppers = confirm("Would you like to use uppercase letters?");
  var lowers = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  };

  let generatedPassword = "";
  var options = [];

  if(uppers) {
    generatedPassword += getRandomCharacter("uppers");
    options.push("uppers");
  }
  if(lowers) {
    generatedPassword += getRandomCharacter("lowers");
    options.push("lowers");
  }
  if(numbers) {
    generatedPassword += getRandomCharacter("numbers");
    options.push("numbers");
  }
  if(symbols) {
    generatedPassword += getRandomCharacter("symbols");
    options.push("symbols");
  }

  // Generats the PW
//  got help from TA with this for loop
  // randomly choose which char to use next throughout loop x depending on length chosen
  for (let i = generatedPassword.length; i < length; i++) {
    generatedPassword += getRandomCharacter(options[Math.floor(Math.random() * options.length)]);
    console.log(generatedPassword);
  }

  return generatedPassword;
}

function getRandomCharacter(characterType) {
  switch (characterType) {
    case 'lowers':
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    case 'uppers':
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    case 'numbers':
      return Math.floor(Math.random() * 10);
    case 'symbols':
      var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      return specialChars[Math.floor(Math.random() * specialChars.length)];
  }
}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);