#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome from '../../src/cli.js'

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
  const maxCountValue = 3
  const maxStepGame = 2

  for (let i = 0; i <= maxStepGame; i++) {
    const { arithmeticProgression, result } = generateProgression()
    console.log(`Question: ${arithmeticProgression}`)

    const answer = readlineSync.question('Your answer: ')

    if (Number(answer) === Number(result)) {
      console.log('Correct!')
      countWin++
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`)
      break
    }
  }

  if (countWin === maxCountValue) {
    console.log(`Congratulations, ${name}!`)
  }
}

export default brainProgression
