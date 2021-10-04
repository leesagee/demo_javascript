// Setting up math
var min = 1;
var max = 32;
var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

// Display math question on page load
document.getElementById("question").innerHTML= num1 + " " + " + " + " " + num2;

// Input required
function validateForm() {
    var validate = document.forms["form"]["answer"].value;
    if (validate !== "") {
      return true;
    } else {
        alert("Valid input required");
        return false;
    }
}

// After submit Reset input and produce new math question
function resetForm() {
    document.getElementById("answer").value="";

    num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    correctanswer = num1 + num2;
    document.getElementById("question").innerHTML= num1 + " " + " + " + " " + num2;
}

// Submit button functionality
function climb() {
    validateForm();
    var correctanswer = num1 + num2;
    var inputanswer = document.getElementById("answer").value;
    console.log(`Input: ${inputanswer} Correct Answer: ${correctanswer}`)

    if (inputanswer == correctanswer) {
        console.log("correct");
        alert("Correct!");
        // if correct, input will reset and next question displays
        resetForm();
        return true;
    } else {
        // if input is incorrect, same question remains until input is correct
        console.log("incorrect");
        alert("Wrong! Try again.");
        return false;
    }
}




