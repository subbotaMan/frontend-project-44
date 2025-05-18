#!/usr/bin/env node 
/* eslint-disable */
import readlineSync from "readline-sync";
import welcome from "../../src/cli.js";
import { congratulations, randomNumberOne, randomNumberSecond } from "../../src/cli.js"; 

const gcd = (a, b) => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

const brainGcd = () => {
    const name = welcome("Find the greatest common divisor of given numbers.")
    let countWin = 0;

    for(let i = 0; i <= 2; i++) {
        let num1 = randomNumberOne();
        let num2 = randomNumberSecond();

        console.log(`Question: ${num1} ${num2}`);

        const result = gcd(num1, num2)
        const answer = readlineSync.question("Your answer: ");

        if(Number(answer) === Number(result)) {
            console.log("Correct");
            countWin += 1;
        } 
        else {
            console.log(`${answer} is wrong answer ;(. Correct answer was '25'. Let's try again, ${name}`);
            break;
        }

        countWin === 3 ? congratulations(name) : null;
    }
}

export default brainGcd;

brainGcd();
