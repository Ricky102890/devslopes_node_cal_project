const rs = require('readline-sync');

const isChar= /^['+-/*']$/;
const isNumber = /^['0-9']+$/;
let firstNum;
let secondNum;
let operation;

startCalc();

function startCalc() {
  while (true) {
    const input = rs.question('What operation would you like to preform? ');
    if (isChar.test(input)) {
      operation = input;
      break;
    }
    else {
      console.log('That is not a valid operation!');
      startCalc();
      break;
    }
  }
}

inputFirstNum();

function inputFirstNum() {
  while(true) {
    let input2 = rs.question('Please enter your first number ');
    if (isNumber.test(input2)) {
      firstNum = input2;
      break;
    }
  }
}

inputSeocndNum();

function inputSeocndNum() {
  while (true) {
    let input3 = rs.question('Please enter your second number ');
    if (isNumber.test(input3)) {
      secondNum = input3;
      break;
    }
  } 
}


if (operation === '+') {
  console.log(parseInt(firstNum) + parseInt(secondNum));
}
if (operation === '-') {
  console.log(parseInt(firstNum) - parseInt(secondNum));
}
if (operation === '*') {
  console.log(parseInt(firstNum) * parseInt(secondNum));
}
if (operation === '/') {
  console.log(parseInt(firstNum) / parseInt(secondNum));
}

