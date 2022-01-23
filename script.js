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

var numChar;
var include;
var incLow;
var incUp;
var incNum;
var incSpec;
var password = "";
var passChar = " ";

const charSet = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    spec: "!@#$%^&*()?/|"

}


function generatePassword() {
    var proceed = confirm("You want a password to be generated for you!");
    if (proceed) {
        numChar = prompt("Please enter the length you want your password to be: ");
        passLen();

        for (var i = 0; i <= numChar; i++) {

            var randomNumber = passChar[Math.floor(Math.random() * passChar.length)];
            password += randomNumber;
        }
        // console.log(password);

        return password;
    }
    else if (!proceed) {
        //don't proceed
        alert("You ended the program. Password NOT created! ");
    }
}

function passLen() {
    if (numChar < 8) {
        alert("Password must be at least 8 characters! ");
        numChar = prompt("Please enter the length you want your password to be: ");
        passLen();
    }

    else if (numChar > 128) {
        alert("Password must be less than 128 characters! ");
        numChar = prompt("Please enter the length you want your password to be: ");
        passLen();

    }
    else {
        // console.log("Number of charcters set to: " + numChar);
        include = confirm("Would you like to include lowercase, uppercase, numeric, and/or special characters?  ");
        incSpecial();
    }
}

function incSpecial() {


    if (include) {
        incLow = confirm("Would you like to include lowercase letters?  ");
        // console.log("Include lower: " + incLow);
        if (incLow == true) {
            [passChar += charSet.lower];
        }
        incUp = confirm("Would you like to include uppercase letters?  ");
        // console.log("Include upper: " + incUp);
        if (incUp == true) {
            [passChar += charSet.upper];
        }
        incNum = confirm("Would you like to include numeric letters?  ");
        // console.log("Include numbers: " + incNum);
        if (incNum == true) {
            [passChar += charSet.numbers];
        }
        incSpec = confirm("Would you like to include special charcters?  ");
        // console.log("Include spec: " + incSpec);
        if (incSpec == true) {
            [passChar += charSet.spec];
        }

        if ((incLow == false) && (incUp == false) &&
            (incNum == false) && (incSpec == false)) {

            alert("You must select at least one character type! ");
            include = confirm("Would you like to include lowercase, uppercase, numeric, and/or special characters?  ");
            incSpecial();
        }

    }
    else {
        alert("You must select at least one character type! ");
        include = confirm("Would you like to include lowercase, uppercase, numeric, and/or special characters?  ");
        incSpecial();
    }

}
