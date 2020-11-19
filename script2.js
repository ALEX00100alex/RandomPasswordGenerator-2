
// Assignment Code


function generate() {
    var generateBtn = document.querySelector("#generate");

    // Write password to the #password input

    var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var characterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
    var allPossible = [];
    var generatedPassword = "";

    var upperConfirm = confirm("Would you like to include upper case letters in your password?")
    var lowerConfirm = confirm("Would you like to include lower case letters in your password?")
    var numberConfirm = confirm("Would you like to include numbers in your password?")
    var charConfirm = confirm("Would you like to include special characters in your password?")

    if (upperConfirm) {
        allPossible = [...allPossible, ...uppercaseArray];
    }
    if (lowerConfirm) {
        allPossible = [...allPossible, ...lowercaseArray];
    }
    if (numberConfirm) {
        allPossible = [...allPossible, ...numberArray];
    }
    if (charConfirm) {
        allPossible = [...allPossible, ...characterArray];
    }

    var length = parseInt(prompt("How long do you want your password to be? Length needs to be between 8 - 128 characters long"));
    for (var i = 0; i < length; i++) {
        var randomCharc = Math.floor(Math.random() * Math.floor(allPossible.length));
        generatedPassword = generatedPassword + allPossible[randomCharc];
    }
    console.log(generatedPassword);

    document.getElementById("password").value = generatedPassword;
}