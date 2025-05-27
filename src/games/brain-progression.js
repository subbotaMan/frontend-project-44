#!/usr/bin/env node
import runEngine from '../core.js'
import { randomNumber } from '../cli.js'

const generateProgression = () => {
  const progression = []
  const length = 5 + Math.floor(Math.random() * 5)
  const firstNumber = randomNumber(50)
  const step = 2 + Math.floor(Math.random() * 6)

  for (let i = 0; i <= length; i++) {
    progression.push(firstNumber + i * step)
  }

  const hiddenIndex = Math.floor(Math.random() * length)
  const correctAnswer = progression[hiddenIndex].toString()
  progression[hiddenIndex] = '..'
  const questionText = progression.join(' ')

  return [questionText, correctAnswer]
}

const description = 'What number is missing in the progression?'

runEngine(description, generateProgression)
