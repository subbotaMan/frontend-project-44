#!/usr/bin/env node
import welcome, { randomNumber, maxCountValue, maxStepGame, stopGame, question, userAnswer, correctAnswer } from '../cli.js'

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

  for (let i = 0; i <= maxStepGame; i++) {
    const randomNum = randomNumber(99)
    const trueValue = simpleCheck(randomNum)

    question(randomNum)
    const answer = userAnswer()

    if (trueValue && answer === 'yes'.toLowerCase().trim()) {
      console.log(correctAnswer)
      countWin++
    }
    else if (!trueValue && answer === 'no'.toLowerCase().trim()) {
      console.log(correctAnswer)
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

  stopGame(countWin, maxCountValue, name)
}

export default brainPrime
