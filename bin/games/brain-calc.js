#!/usr/bin/env node

import readlineSync from "readline-sync";
import welcome from "../../src/cli.js";
import {
  congratulations,
  randomNumberOne,
  randomNumberSecond,
} from "../../src/cli.js";

const brainCalc = () => {
  const operators = ["+", "-", "*"];
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  const name = welcome("What is the result of the expression?");

  let countWin = 0;
  const maxCountValue = 3;

  for (let i = 0; i <= 2; i++) {
    const num1 = randomNumberOne();
    const num2 = randomNumberSecond();

    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const result = operations[randomOperator](num1, num2);

    console.log(`Question: ${num1} ${randomOperator} ${num2}`);
    const answer = readlineSync.question("Your answer: ");

    if (Number(answer) === Number(result)) {
      console.log("Correct!");
      countWin += 1;
    } 
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`);
      break;
    }

    if (countWin === maxCountValue) {
      congratulations(name);
    }
  }
};

export default brainCalc;

brainCalc();
