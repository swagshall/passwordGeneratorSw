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
var specChoice;
// var charSet= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
// var specSet=""

function generatePassword(){
        var proceed = confirm("You want a password to be generated for you!");
        if (proceed) {
            numChar= prompt("Please enter the length you want your password to be: ");
          passLen();

            // for (var i = 0; i <= numChar; i++) {
            //     var randomNumber = Math.floor(Math.random() * chars.length);
            //     password += chars.substring(randomNumber, randomNumber +1);
            // }
                    document.getElementById("password").value = password;
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
        include=confirm("Would you like to include lowercase, uppercase, numeric, and/or special characters?  ");
        incSpec();
    }
}

function incSpec(){
    
    
    if(include){
        specChoice=prompt("Please enter the character type you'd like to include: lowercase, uppercase, numeric, and/or special characters ");

            if ((specChoice=="lowercase") || (specChoice=="uppercase")||
            (specChoice=="numeric")|| (specChoice=="special characters")){
        
                console.log("Include special characters: "+include+ " charcter: "+ specChoice);
            }
            else{
                alert("You must select at least one character type! ");
                include=confirm("Would you like to include lowercase, uppercase, numeric, and/or special characters?  ");
                incSpec();
            }    
       
         //call to function that generates random password
    }
    else {
        alert("You must select at least one character type! ");
        include=confirm("Would you like to include lowercase, uppercase, numeric, and/or special characters?  ");
        incSpec();
    }    
    
}