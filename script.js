function getRandomPassword() {
    var bigData =[];
    var passwordPrompt = prompt("Please choose a number between 8 and 128 to determine the amount of characters in your password");
    
    var numberOfTimes = (passwordPrompt);
    console.log()
    if (numberOftimes < 8 || numberOfTimes > 128) {
        alert("Please choose a number between 8 and 128")
    
    }
    else {
        var password = "";
        var specialCharacters = confirm("would you like special character in your password?");
        if (specialCharacters === true) {

            bigArray.push("@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".");
        }
    }
    var numCharYes = confirm("Would you like numbers in your password?");
    if (numCharYes === true) {
    bigArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
    var lowerCharYes = confirm("Would you like lower case letters in your password?");
    if (lowerCharYes === true) {
    bigArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
    var upperCharYes = confirm("Would you like upper case letters in your password?");
    if (upperCharYes === true) {
    bigArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }

    // this is just to see if I have all the items in the bigArray
    console.log(bigArray);

    //add password to previously generated passwords section
document.getElementById("display").value = "Your Secured Password";

var genButton = document.getElementById("generatepass")
genButton.addEventListener("click", function () {
    generatePassword()

})

//add password to previously generated passwords section
document.getElementById("display").value = password;

// look up events js 
// look up addeventlistner

var genButton = document.getElementById("generatepass")
genButton.addEventListener("click", function () {
    generatePassword()
    console.log()
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
    for (var i = 0; i <= 10; i++) {
        var rand = getRandomInt(0, length)
        // password += values[rand]
        password = password + values[rand]
    }
    console.log(password)
    var display = document.getElementById("display")
    display.innerHTML = password
}

function copytoclipboard() {
    console.log('copy to clipboard');
}
}

