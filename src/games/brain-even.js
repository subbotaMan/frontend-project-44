#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../cli.js'
import {
  congratulations,
  randomNumber,
} from '../../src/data.js'

const brainEven = () => {
  const name = welcome('Answer "yes" if the number is even, otherwise answer "no".')

  let countWin = 0
  const maxCountValue = 3
  const maxStepGame = 2

  for (let i = 0; i <= maxStepGame; i++) {
    const generatedNumber = randomNumber(99)
    console.log(`Question: ${generatedNumber}`)
    const answer = readlineSync.question('Your answer: ').toLowerCase().trim()

    if (
      (answer === 'yes' && generatedNumber % 2 === 0) || (answer === 'no' && generatedNumber % 2 !== 0)) {
      console.log('Correct')
      countWin += 1
    }
    else {
      const correctAnswer = generatedNumber % 2 === 0 ? 'yes' : 'no'
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`)
      break
    }

    if (countWin === maxCountValue) {
      congratulations(name)
    }
  }
}

export default brainEven
