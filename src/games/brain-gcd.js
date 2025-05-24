#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../../src/cli.js'
import {
  congratulations,
  randomNumber,
} from '../../src/data.js'

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
  const maxCountValue = 3
  const maxStepGame = 2

  for (let i = 0; i <= maxStepGame; i++) {
    const num1 = randomNumber(99)
    const num2 = randomNumber(99)

    console.log(`Question: ${num1} ${num2}`)

    const result = gcd(num1, num2)
    const answer = readlineSync.question('Your answer: ')

    if (Number(answer) === Number(result)) {
      console.log('Correct')
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

export default brainGcd
