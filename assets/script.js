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
var lower = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
var upper = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
var num = '0,1,2,3,4,5,6,7,8,9';
var sym = '!#$%&*()=-+/{}';

function generatePassword() {
    //Initial Prompt for password length when button clicked
    let passwordLength = window.prompt('Please chose the length of your password between 8 and 128.');
    
    //User defined password lenght defined
    passwordLength = parseInt(passwordLength);
    console.log(typeof passwordLength);

    // if(passwordLength >= 8 && passwordLength <= 128) {
    //     console.log(passwordLength);
    // } else {
    //     alert("Password must be at least 8 characters.");
    // }

    //Trying to 
    if(passwordLength < 8 || passwordLength > 128) {
        alert("Password must be at least 8 characters.");
    } 
    // else if(passwordLength > 128) {
    //     alert("Password must be at least 8 characters.");
    // }  
    else (passwordLength >= 8 && passwordLength <= 128) 
        console.log(passwordLength);
    
    let passLower = window.confirm('Would you like to use Lower Case characters?');

    console.log(passLower);

    let passUpper = window.confirm('Would you like your password to include Upper Case characters?');

    console.log(passUpper);

    let passNum = window.confirm('Would you like to use Numbers in your password?');

    console.log(passNum);

    let passSym = window.confirm('Would you like to have any Special characters in your password?');

    console.log(passSym);
    
    var possChar = [','];
    var selChar = [','];

    if(passLower === true) {
        var possChars = possChar.concat(lower);
        var selChar = lower[Math.floor(Math.random() * lower.length)];
        possChars.push(selChar);
    }

    if(passUpper === true) {
        var possChars = possChar.concat(upper);
        var selChar = upper[Math.floor(Math.random() * upper.length)];
        possChars.push(selChar);
    }

    if(passNum === true) {
        var possChars = possChar.concat(num);
        var selChar = num[Math.floor(Math.random() * num.length)];
        possChars.push(selChar);
    }

    if(passSym === true) {
        var possChars = possChar.concat(sym);
        var selChar = sym[Math.floor(Math.random() * sym.length)];
        possChars.push(selChar);

        
    }
    String(possChar)
    console.log(selChar)
    console.log(typeof selChar)
    console.log(typeof possChar)
    console.log(passwordLength)
    console.log(typeof passwordLength)


    var password = "";

    for(var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * selChar.length);
        password += password[random];
    }
    return password;
}

