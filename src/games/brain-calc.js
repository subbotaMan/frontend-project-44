#!/usr/bin/env node
import welcome, { randomNumber, maxCountValue, maxStepGame, stopGame, question, userAnswer, correctAnswer } from '../cli.js'

const brainCalc = () => {
  const operators = ['+', '-', '*']
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  }

  const name = welcome('What is the result of the expression?')
  let countWin = 0

  for (let i = 0; i <= maxStepGame; i++) {
    const num1 = randomNumber(99)
    const num2 = randomNumber(99)

    const randomOperator = operators[Math.floor(Math.random() * operators.length)]
    const result = operations[randomOperator](num1, num2)

    question(num1, randomOperator, num2)

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

export default brainCalc
