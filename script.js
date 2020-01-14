// generate Password
// function generate () {

//     //set password length/complexity
// } 
 var complexity = [];
  
  //possible Password Values
  var values ="ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";


  var password = "hello";
  
 
//add password to textbox/ Your Secured Password section
console.log(password);
// console.log(document.querySelector("#display"));
var element = document.getElementById("display")
console.log(element);
element.innerText = password;


//add password to previously generated passwords section
document.getElementById("display").value = password;

// look up events js 
// look up addeventlistner

var genButton = document.getElementById("generatepass")
genButton.addEventListener("click", function(){
    generatePassword()
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function generatePassword() {
    // get values .length
    // generate random # between 0 and values.length
    //for length of the password generate that many variables
    var length = values.length
    var password = ""
    console.log('generate random password');
     //create for loop to choose password Characters
    for(var i = 0; i <= 10; i++){
        var rand = getRandomInt(0, length)
        // password += values[rand]
         password = password + values[rand]
    }
    console.log(password)

}

function copytoclipboard() {
    console.log('copy to clipboard');
}
