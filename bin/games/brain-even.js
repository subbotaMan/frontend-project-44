#!/usr/bin/env node 
import readlineSync from "readline-sync";
import welcome from "../../src/cli.js";
import { congratulations, randomNumberOne } from "../../src/cli.js";

const brainEven = () => {
  const name = welcome("Answer 'yes' if the number is even, otherwise answer 'no'.")
  
  let countWin = 0;
  
  for (let i = 0; i <= 2; i++) {
    const generatedNumber = randomNumberOne();
    console.log(`Question: ${generatedNumber}`);
    const answer = readlineSync.question("Your answer: ");

    if ((answer === "yes".trim() && generatedNumber % 2 === 0) || (answer === "no".trim() && generatedNumber % 2 !== 0)) {
      countWin += 1;
      console.log("Correct");
    }

    if (countWin === 3) {
      congratulations(name);
    }

    if (answer === "yes" && generatedNumber % 2 !== 0) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
      break;
    }
    if (answer === "no" && generatedNumber % 2 === 0) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
      break;
    };
    if (answer !== "yes" && answer !== "no") {
      console.log(`Incorrect answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
      break;
    }
  }
};

export default brainEven;

brainEven();

