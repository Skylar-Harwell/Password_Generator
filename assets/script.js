// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Created Variabkes for password creation
var lower = 'abcdefghijkmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!#$%&*()=-+/{}';

function generatePassword() {
    //Initial Prompt for password length when button clicked
    let passwordLength = window.prompt('Please chose the length of your password between 8 and 128 characters.');
    
    //User defined password lenght defined
    passwordLength = parseInt(passwordLength);
    console.log(typeof passwordLength);

    if(passwordLength >= 8 && passwordLength <= 128) {
        console.log(passwordLength);
    } else {
        alert('Password must be at least 8 characters and no more than 128 characters.');
        return '';
    }

    let passLower = window.confirm('Would you like to use Lower Case characters?');

    console.log(passLower);

    let passUpper = window.confirm('Would you like your password to include Upper Case characters?');

    console.log(passUpper);

    let passNum = window.confirm('Would you like to use Numbers in your password?');

    console.log(passNum);

    let passSym = window.confirm('Would you like to have any Special characters in your password?');

    console.log(passSym);

    if(!passLower && !passUpper && !passNum && !passSym) {
        alert("Oh, a wiseguy eh? You gotta chose at least one character type! Otherwise you just got the 'Invisible Man' as your password...");
        return '';
    }
    
    var possChar = '';

    console.log(lower)
    console.log(typeof lower)

    if(passLower) {
        possChar = possChar.concat(lower);
    }

    if(passUpper) {
        possChar = possChar.concat(upper);
    }

    if(passNum) {
        possChar = possChar.concat(num);
    }

    if(passSym) {
        possChar = possChar.concat(sym);
    }

    var password = "";

    for(var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * possChar.length);
        password += possChar[random];
    }
    return password;
}

