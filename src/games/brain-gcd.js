#!/usr/bin/env node
import welcome, { randomNumber, maxCountValue, maxStepGame, question, userAnswer, correctAnswer, stopGame } from '../../src/cli.js'

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const brainGcd = () => {
  const name = welcome('Find the greatest common divisor of given numbers.')
  let countWin = 0

  for (let i = 0; i <= maxStepGame; i++) {
    const num1 = randomNumber(99)
    const num2 = randomNumber(99)

    question(num1, num2)

    const result = gcd(num1, num2)
    const answer = userAnswer()

    if (Number(answer) === Number(result)) {
      console.log(correctAnswer)
      countWin += 1
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`)
      break
    }

    stopGame(countWin, maxCountValue, name)
  }
}

export default brainGcd
