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

function generatePassword(){
        var proceed = confirm("You want a password to be generated for you!");
        if (proceed) {
            numChar= prompt("Please enter the length you want your password to be: ");
          passLen();
        } 
        else if (!proceed) {
        //don't proceed
        alert("You ended the program. Password NOT created! ");
        }
}

function passLen(){
    if(numChar<8){
        alert("Password must be at least 8 characters! ");
        numChar=prompt("Please enter the length you want your password to be: ");
        passLen();
    }

    else if(numChar>128){
        alert("Password must be less than 128 characters! ");
        numChar=prompt("Please enter the length you want your password to be: ");
        passLen();

    }
    else{
        console.log("Number of charcters set to: "+numChar);
    }
}