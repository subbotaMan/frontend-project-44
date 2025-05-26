#!/usr/bin/env node
import welcome, { maxCountValue, maxStepGame, stopGame, question, userAnswer, correctAnswer } from '../cli.js'

const generateProgression = () => {
  const progression = []
  const length = 5 + Math.floor(Math.random() * 5)
  const firstNumber = Math.floor(Math.random() * 50)
  const step = 2 + Math.floor(Math.random() * 6)

  for (let i = 0; i <= length; i++) {
    progression.push(firstNumber + i * step)
  }

  const hiddenIndex = Math.floor(Math.random() * length)
  const result = progression[hiddenIndex]
  progression[hiddenIndex] = '..'
  const arithmeticProgression = progression.join(' ')

  return { arithmeticProgression, result }
}

const brainProgression = () => {
  const name = welcome('What number is missing in the progression?')
  let countWin = 0

  for (let i = 0; i <= maxStepGame; i++) {
    const { arithmeticProgression, result } = generateProgression()
    question(arithmeticProgression)

    const answer = userAnswer()

    if (Number(answer) === Number(result)) {
      console.log(correctAnswer)
      countWin++
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`)
      break
    }
  }
  stopGame(countWin, maxCountValue, name)
}

export default brainProgression
