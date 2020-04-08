let form  = document.getElementsByTagName('form')[0];
let winningNumbers = [];
let errorMessages = [];
const message = document.getElementById("message");


function validateEmail(resource) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(resource).toLowerCase());
}

function validate() {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    if(firstName == "") {
        errorMessages.push("Please enter your first name.");
        return false;
      }
    if(lastName == "") {
        errorMessages.push("Please enter your last name.");
        return false;
    }
    if(email == "") {
        errorMessages.push("Please enter your email.");
        return false;
    }
    if(!validateEmail(email)) {
        errorMessages.push("Please enter a valid email.");
        return false;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
  
function getArrayOfSixRandomNumbers() {
    winningNumbers = [];
    for (var i = 0; i < 6; i++){
        winningNumbers.push(getRandomIntInclusive(1, 49));
    }
}

function checkIfGoodNumbers(winningNums) {
    let num1 = document.getElementById('number1').value
    let num2 = document.getElementById('number2').value
    let num3 = document.getElementById('number3').value
    let num4 = document.getElementById('number4').value
    let num5 = document.getElementById('number5').value
    let num6 = document.getElementById('number6').value
    let numbers = [Number(num1), Number(num2), Number(num3), Number(num4), Number(num5), Number(num6)].sort();
    for (var i = 0; i < 6; i++){
        if (numbers[i] == 0){
            errorMessages.push("Six numbers must be entered");
        return false;
        }
        else {
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] != winningNums[i]){
                message.innerHTML = 
                "Sorry you lost, the winning number are : " + String(winningNums);
            return false;
            }
        }
        message.innerHTML = 
            "Congratulation, you win 1 million dollars !!!!!";
        return true;
    }
  }
}

function errors(errorMsgs) {
    errorMsgs.forEach(errorMessage => {
        message.innerHTML = errorMessage
    });
}

function checkLoto() {
    window.addEventListener("DOMContentLoaded", () => {
        form.addEventListener('submit', e => {
            e.preventDefault()
            message.innerHTML = ""
            getArrayOfSixRandomNumbers()
            validate()
            errors(errorMessages)
            checkIfGoodNumbers(winningNumbers)
        })
    })
}

checkLoto()