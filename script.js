// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "@",
  "%",
  "+",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_"
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Function to prompt user for password options and validate the password minimal requistion 
function generatePassword() {
  let length = 0;
  let lowercase = false;
  let uppercase = false;
  let numeric = false;
  let special = false;

    length = prompt("Enter the length of the password (at least 10 and no more than 64 characters):");
  while (length < 10) {
    alert ("You must insert the lenght up to 10 caracters please!");
    length = prompt("Enter the length of the password (at least 10 and no more than 64 characters):");
  }while (length > 64){
    alert ("You must insert the lenght under to 64 caracters please!");
    length = prompt("Enter the length of the password (at least 10 and no more than 64 characters):");
  }
  // }while (length > 10 || length > 64){
  //   alert ("Enter the length of the password (at least 10 and no more than 64 characters):");
  //   length = prompt("Enter the length of the password (at least 10 and no more than 64 characters):");
  // }
  lowercase = confirm("Include lowercase characters in the password?");
  uppercase = confirm("Include uppercase characters in the password?");
  numeric = confirm("Include numeric characters in the password?");
  special = confirm("Include special characters in the password?");
  
  // Validate that at least one character type is selected

  while (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type to include in the password!");
    lowercase = confirm("Include lowercase characters in the password?");
    uppercase = confirm("Include uppercase characters in the password?");
    numeric = confirm("Include numeric characters in the password?");
    special = confirm("Include special characters in the password?");
  }
  
//Method to getting a element from an array

let characters = [];

  if (lowercase) {
    characters = characters.concat(lowerCasedCharacters); 
  }
  if (uppercase) {
    characters = characters.concat (upperCasedCharacters); 
  }
  if (numeric)  {
    characters = characters.concat (numericCharacters); 
  }
  if (special) {
    characters = characters.concat (specialCharacters);
  }
  console.log(characters);

// method to generate password from the variable that has integrated user input and array
let password = "";
  for (let i = 0; i < length; i++) {
    password = password += characters [Math.floor(Math.random() * characters.length)];
  }
   return password;

}
// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector('#password');
  let password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


