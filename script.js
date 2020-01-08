// generate Password
function generate () {

    //set password length/complexity
  
 var complexity = [""]
  
  //possible Password Values
  var Values = ["!","@","#","$","%","&"]


  var password = ""

  //create for loop to choose password Characters
  for(var i =0; i <=complexity;i++){
      password = password + value.charAt(Math.random() * Math.floor(Values.length -1));
  }
//add password to textbox/ Your Secured Password section
document.getElementById("display").Value = password;

//add password to previously generated passwords section
document.getElementById("lastNums").innerHTML+=password +"<br />";
}

function generatePassword() {
    console.log('generate random password');
}

function copytoclipboard() {
    console.log('copy to clipboard');
}