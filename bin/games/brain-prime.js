#!/usr/bin/env node

import readlineSync from "readline-sync";
import welcome from "../../src/cli.js";
import { simpleNum } from "../../src/cli.js";

const brainPrime = () => {
  const name = welcome('Answer "yes" if given number is prime. Otherwise answer "no".');
  const arrNum = [];
  let countWin = 0;
  const maxCountValue = 3;

  simpleNum.forEach((element) => {
    arrNum.push(element);
  });

  for (let i = 0; i <= 2; i++) {
    const randomNum = Math.floor(Math.random() * arrNum.length);
    const trueValue = arrNum.includes(randomNum) ? true : false;

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question("Your answer: ");

    if (trueValue && answer === "yes".toLowerCase().trim()) {
      console.log("Correct!");
      countWin++;
    } 
    else if (!trueValue && answer === "no".toLowerCase().trim()) {
      console.log("Correct!");
      countWin++;
    } 
    else if (trueValue && answer === "no".toLowerCase().trim()) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
      break;
    } 
    else if (!trueValue && answer === "yes".toLowerCase().trim()) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
      break;
    }
  }
  if (countWin === maxCountValue) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainPrime();

export default brainPrime;
