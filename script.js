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
var passChar='';

const charSet ={
 lower : "abcdefghijklmnopqrstuvwxyz", 
 upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
 numbers: "0123456789",
 spec: "!@#$%^&*()?/|"

}
// var lower= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];;
// var upper= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var numeric= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specChar=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "|"];





function generatePassword(){
        var proceed = confirm("You want a password to be generated for you!");
        if (proceed) {
            numChar= prompt("Please enter the length you want your password to be: ");
          passLen();
       

        //     for (var i = 0; i <= numChar; i++) {
        //         //do if inc =true or...=true next comment
        //         if ((incLow==true) && (incUp==true)&&
        //         (incNum==true)&&(incSpec==true)){

        //             var fullCharSet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "|" ] ;

        //         var randomNumber = Math.floor(Math.random() * fullCharSet.length);
        //         password += fullCharSet[i].substring(randomNumber, randomNumber +1);
        //     }
        //     // console.log(document.getElementById("password").value = password);
        //     console.log(password);

        // }
                    

        //     return "password goes here";
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
        incSpecial();
    }
}

function incSpecial(){
    
    
    if(include){
        incLow=confirm("Would you like to include lowercase letters?  ");
        console.log("Include lower: " +incLow); 
            if (incLow== true){
                [passChar+=charSet.lower];
            }
        incUp=confirm("Would you like to include uppercase letters?  ");
        console.log("Include upper: " +incUp);
             if (incUp== true){
                [passChar+=charSet.upper];
             }
        incNum=confirm("Would you like to include numeric letters?  ");
        console.log("Include numbers: " +incNum);
                if (incNum== true){
                    [passChar+=charSet.numbers];
                }
        incSpec=confirm("Would you like to include special charcters?  ");
        console.log("Include spec: " +incSpec);
                if (incSpec== true){
                    [passChar+=charSet.spec];
                }

            if ((incLow==false) && (incUp==false)&&
            (incNum==false)&&(incSpec==false)){
        
                alert("You must select at least one character type! ");
                include=confirm("Would you like to include lowercase, uppercase, numeric, and/or special characters?  ");
                incSpecial();
            }
            else{
                console.log("call to generare function" );
                console.log("password chars include: "+passChar );
            }    
       
         //call to function that generates random password
    }
    else {
        alert("You must select at least one character type! ");
        include=confirm("Would you like to include lowercase, uppercase, numeric, and/or special characters?  ");
        incSpecial();
    }    
    
}
// function genPass(numChar, incLow, incUp, incNum, incSpec){

// }