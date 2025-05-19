#!/usr/bin/env node
import readlineSync from "readline-sync";
import welcome, { congratulations, randomNumberOne } from "../../src/cli.js";

const brainEven = () => {
  const name = welcome('Answer "yes" if the number is even, otherwise answer "no".');

  let countWin = 0;
  const maxCountValue = 3;

  for (let i = 0; i <= 2; i++) {
    const generatedNumber = randomNumberOne();
    console.log(`Question: ${generatedNumber}`);
    const answer = readlineSync.question("Your answer: ").toLowerCase().trim();

    if (
      (answer === "yes" && generatedNumber % 2 === 0) || (answer === "no" && generatedNumber % 2 !== 0)) {
      console.log("Correct");
      countWin += 1;
    } 
    else {
      const correctAnswer = generatedNumber % 2 === 0 ? "yes" : "no";
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      break;
    }

    if (countWin === maxCountValue) {
      congratulations(name);
    }
  }
};

export default brainEven;

brainEven();
