#!/usr/bin/env node
import runEngine from '../core.js'
import { randomNumber } from '../cli.js'

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateRound = () => {
  const num1 = randomNumber(99)
  const num2 = randomNumber(99)
  const questionText = `${num1} ${num2}`
  const correctAnswer = gcd(num1, num2).toString()
  return [questionText, correctAnswer]
}

const description = 'Find the greatest common divisor of given numbers.'

runEngine(description, generateRound)
