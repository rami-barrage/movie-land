let display = document.getElementById("result");

function addChar(char) {
  display.innerHTML += char;
}

function clearDisplay() {
  display.innerHTML = "";
}

function deleteLastChar() {
  let str = display.innerHTML;
  display.innerHTML = str.slice(0, str.length - 1);
}

function calculate() {
  let expr = display.innerHTML;
  let numbers = expr.split(/[\+\-\*\/]/); // split the expression into an array of numbers
  let operators = expr.match(/[\+\-\*\/]/g); // extract the operators as an array
  let result = parseFloat(numbers[0]); // start with the first number
  for (let i = 0; i < operators.length; i++) {
    let number = parseFloat(numbers[i + 1]); // get the next number
    let operator = operators[i]; // get the next operator
    if (operator === "+") {
      result += number;
    } else if (operator === "-") {
      result -= number;
    } else if (operator === "*") {
      result *= number;
    } else if (operator === "/") {
      result /= number;
    }
  }
  display.innerHTML = result;
}

// const menuBtn = document.querySelector('.menu-btn');
// const nav = document.querySelector('nav');

// menuBtn.addEventListener('click', () => {
//   nav.classList.toggle('nav-active');
// });
