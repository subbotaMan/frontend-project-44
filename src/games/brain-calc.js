#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../cli.js'
import {
  congratulations,
  randomNumber,
} from '../data.js'

const brainCalc = () => {
  const operators = ['+', '-', '*']
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  }

  const name = welcome('What is the result of the expression?')

  let countWin = 0
  const maxCountValue = 3
  const maxStepGame = 2

  for (let i = 0; i <= maxStepGame; i++) {
    const num1 = randomNumber(99)
    const num2 = randomNumber(99)

    const randomOperator = operators[Math.floor(Math.random() * operators.length)]
    const result = operations[randomOperator](num1, num2)

    console.log(`Question: ${num1} ${randomOperator} ${num2}`)
    const answer = readlineSync.question('Your answer: ')

    if (Number(answer) === Number(result)) {
      console.log('Correct!')
      countWin += 1
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`)
      break
    }

    if (countWin === maxCountValue) {
      congratulations(name)
    }
  }
}

export default brainCalc
