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


var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!#$%&*()=-+/{}';
var possChar = [];
var selChar = [];
    
function generatePassword() {
    let passwordLength = window.prompt('Please chose the length of your password between 8 and 128.');
    
    passwordLength = parseInt(passwordLength);
    console.log(typeof passwordLength);

    if(passwordLength >= 8 && passwordLength <= 128) {
        console.log(passwordLength);
    } else {
        alert("Password must be at least 8 characters.");
    }

    let passLower = window.confirm('Would you like to use Lower Case characters?');

    console.log(typeof passLower);
    console.log(passLower);

    let passUpper = window.confirm('Would you like your password to include Upper Case characters?');

    console.log(passUpper);

    let passNum = window.confirm('Would you like to use Numbers in your password?');

    console.log(passNum);

    let passSym = window.confirm('Would you like to have any Special characters in your password?');

    console.log(passSym);

    var possChar = [];
    var selChar = [];

    if(passLower.usesLower === true) {
       var possChars = possChars.concat(lower);
       var selChar = lower[Math.floor(Math.random() * lower.length)];
       possChar.push(possChars);
    }

    if(passUpper.usesUpper === true) {
        var possChars = possChars.concat(upper);
        var selChar = upper[Math.floor(Math.random() * upper.length)];
        possChar.push(possChars);
        possChar = selChar;
    }

    if(passNum.usesNum === true) {
        var possChars = possChars.concat(num);
        var selChar = num[Math.floor(Math.random() * num.length)];
        possChar.push(possChars);
    }

    if(passSym.usesSym === true) {
        var possChars = possChars.concat(sym);
        var selChar = sym[Math.floor(Math.random() * sym.length)];
        possChar.push(possChars);
    }
    console.log(possChar)
}

