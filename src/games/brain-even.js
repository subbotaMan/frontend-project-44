#!/usr/bin/env node
import runEngine from '../core.js'
import { randomNumber } from '../cli.js'

const generateRound = () => {
  const number = randomNumber(99)
  const questionText = number.toString()
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return [questionText, correctAnswer]
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

runEngine(description, generateRound)
