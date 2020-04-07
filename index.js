const message = document.getElementById("message")

function validateEmail(resource) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(resource).toLowerCase());
}

function validate() {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    if(firstName == "") {
        message.innerHTML = 
        "Please enter your first name.";
        return false;
      }
    if(lastName == "") {
        message.innerHTML = 
            "Please enter your last name.";
        return false;
    }
    if(email == "") {
        message.innerHTML = 
            "Please enter your email.";
        return false;
    }
    if(!validateEmail(email)) {
        message.innerHTML = 
            "Please enter a valid email.";
        return false;
    }

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  
function getArrayOfSixRandomNumbers() {
    winningNumbers = []
    for (var i = 0; i < 6; i++){
        winningNumbers.push(getRandomIntInclusive(0, 9));
    }
}

function checkIfGoodNumbers(numbers, winningNums) {
    const number1 = document.getElementById('number1').value
    const number2 = document.getElementById('number2').value
    const number3 = document.getElementById('number3').value
    const number4 = document.getElementById('number4').value
    const number5 = document.getElementById('number5').value
    const number6 = document.getElementById('number6').value
    numbers = [Number(number1), Number(number2), Number(number3), Number(number4), Number(number5), Number(number6)].sort();
    if (numbers.length !== winningNums.length){
        message.innerHTML = 
        "Six numbers must be entered";
    return false;
    }
    else {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] != winningNums[i]){
            message.innerHTML = 
            "Sorry you lost";
        return false;
        }
    }
    message.innerHTML = 
        "Congratulation, you win 1 million dollars !!!!!";
    return true;
  }
}

const checkLoto = () => {
    validate()
    checkIfGoodNumbers()
}