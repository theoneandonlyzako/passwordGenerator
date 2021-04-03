// Assignment code here
var generatePassword = function () {
  debugger;
  var length = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
 console.log(length)

  var uppers = confirm("Would you like to use uppercase letters?");
  if (true) {
    console.log(uppers)
  }
  var lowers = confirm("Would you like to use lowercase letters?");
  if (true) {
    console.log(lowers)
  }
  var numbers = confirm("Would you like to use numbers?");
  if (true) {
    console.log(numbers)
  }
  var symbols = confirm("Would you like to use special characters?");
  if (true) {
    console.log(symbols)
  }
  
  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");

    function generatePassword(){
      // 1. init pw var
      // 2. filter out unchecked types
      // 3. loop over length call generator function for each type
      // 4. add final pw to the pw var and return to window

      let generatedPassword = "";
    
       // if confirm.upper (upper = true) {
    //   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    //   }
    // }
    
    // if (confirm.lower = true) {
    //   function randomLowerCase() {
    //   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    //   }
    // }
    
    // if (confirm.numbers = true) {
    //   function randomNumber() {
    //   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    //   }
    // }
    
    // if (confirm.symbols = true) {
    //   function randomSymbol() {
    //   const symbols = '`~!@#$%^&*()-_=+[{]}|;:",<.>/?';
    //   return symbols[Math.floor(Math.random() * symbols.length)];
    //   }
    // }
    }
  };
}

function writePassword(){
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// code to keep for now -->


// if (confirm.upper = true) {
//   function randomUpperCase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//   }
// }

// if (confirm.lower = true) {
//   function randomLowerCase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//   }
// }

// if (confirm.numbers = true) {
//   function randomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//   }
// }

// if (confirm.symbols = true) {
//   function randomSymbol() {
//   const symbols = '`~!@#$%^&*()-_=+[{]}|;:",<.>/?';
//   return symbols[Math.floor(Math.random() * symbols.length)];
//   }
// }

// Write password to the #password input
// function writePassword(uppers, lowers, numbers, symbols) {
//   String.fromCharCode(65)
// }

// function arrayFromHighToLow (low, high) {
//   const array =[]
//   for (let i = low; i <= high; i++) {
//     array.push(i)
//   }
//   return array
// }
  
// function writePassword(){
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Dom elements
// const resultEl = document.getElementById("result");
// const lengthEl = document.getElementById("length");
// const uppercaseEl = document.getElementById("uppercase");
// const lowercaseEl = document.getElementById("lowercase");
// const numbersEl = document.getElementById("numbers");
// const symbolsEl = document.getElementById("symbols");
// const generateEl = document.getElementById("generate");

// generate


// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomupper,
//   number: getRandomNumber,
//   symbol: getRandomsymbol
// };

// function randomLowerCase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function randomUpperCase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function randomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function randomSymbol() {
//   const symbols = '`~!@#$%^&*()-_=+[{]}|;:",<.>/?';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }


// const UPPERCASE_CHAR_CODES = arrayFromHighToLow(65, 90)
// const LOWERCASE_CHAR_CODES = arrayFromHighToLow(97, 122)
// const NUMBERS_CHAR_CODES = arrayFromHighToLow(48, 57)
// const SYMBOLS_CHAR_CODES = arrayFromHighToLow(33, 47). concat (
//   arrayFromHighToLow(58, 64).concat(
//     arrayFromHighToLow(91, 97)
//   )
// )



//ParseInt()


// const passsword = generatePassword
// characterAmount = characterAmount.value
