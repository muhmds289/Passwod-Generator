// generate Password
function generate () {

    //set password length/complexity
  
 var complexity = [""]
  
  //possible Password Values
  var Values ="ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";


  var password = ""
  
  //create for loop to choose password Characters
  for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}
//add password to textbox/ Your Secured Password section
document.getElementById("display").Value = password;

//add password to previously generated passwords section
document.getElementById("display").value = password;

function generatePassword() {
    console.log('generate random password');
}

function copytoclipboard() {
    console.log('copy to clipboard');
}