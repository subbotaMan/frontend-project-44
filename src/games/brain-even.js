#!/usr/bin/env node
import welcome, { randomNumber, maxCountValue, maxStepGame, stopGame, question, userAnswer, correctAnswer } from '../cli.js'

const brainEven = () => {
  const name = welcome('Answer "yes" if the number is even, otherwise answer "no".')
  let countWin = 0

  for (let i = 0; i <= maxStepGame; i++) {
    const generatedNumber = randomNumber(99)
    question(generatedNumber)
    const answer = userAnswer()

    if (
      (answer === 'yes' && generatedNumber % 2 === 0) || (answer === 'no' && generatedNumber % 2 !== 0)) {
      console.log(correctAnswer)
      countWin += 1
    }
    else {
      const correctAnswer = generatedNumber % 2 === 0 ? 'yes' : 'no'
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`)
      break
    }
    stopGame(countWin, maxCountValue, name)
  }
}

export default brainEven
