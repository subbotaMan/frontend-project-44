#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../cli.js'
import { randomNumber } from '../data.js'

const simpleCheck = (n) => {
  if (n <= 1 || n % 2 === 0) return false
  if (n === 2) return true

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const brainPrime = () => {
  const name = welcome('Answer "yes" if given number is prime. Otherwise answer "no".')
  let countWin = 0
  const maxCountValue = 3
  const maxStepGame = 2

  for (let i = 0; i <= maxStepGame; i++) {
    const randomNum = randomNumber(99)
    const trueValue = simpleCheck(randomNum)

    console.log(`Question: ${randomNum}`)
    const answer = readlineSync.question('Your answer: ')

    if (trueValue && answer === 'yes'.toLowerCase().trim()) {
      console.log('Correct!')
      countWin++
    }
    else if (!trueValue && answer === 'no'.toLowerCase().trim()) {
      console.log('Correct!')
      countWin++
    }
    else if (trueValue && answer === 'no'.toLowerCase().trim()) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`)
      break
    }
    else if (!trueValue && answer === 'yes'.toLowerCase().trim()) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`)
      break
    }
  }
  if (countWin === maxCountValue) {
    console.log(`Congratulations, ${name}!`)
  }
}

export default brainPrime
