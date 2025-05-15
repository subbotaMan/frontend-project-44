#!/usr/bin/env node 
/* eslint-disable */
import readlineSync from "readline-sync";

const calc = () => {
    const operators = ['+', '-', '*'];
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
      };

      console.log("Welcome to the Brain Games!");
      const name = readlineSync.question("May I have your name? ");
      console.log(`Hello, ${name}!`);
      console.log("What is the result of the expression?");

      let countWin = 0;

      for (let i = 0; i <= 2; i++) {   
        const randomNumberOne = Math.ceil(Math.random() * 100);
        const randomNumberSecond = Math.ceil(Math.random() * 100);
        const randomOperator = operators[Math.floor(Math.random() * operators.length)];
        const result = operations[randomOperator](randomNumberOne, randomNumberSecond);

        console.log(`Question: ${randomNumberOne} ${randomOperator} ${randomNumberSecond}`);
        const answer = readlineSync.question("Your answer: ");

        if (Number(answer) === Number(result)) {
            console.log("Correct!");  
            countWin += 1;
        } 

        if (Number(answer) !== Number(result)) {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
            break;
        }

        if (countWin === 3) {
            console.log(`Congratulations, ${name}!`);
          }
      }
}

export default calc;

calc();