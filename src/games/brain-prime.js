#!/usr/bin/env node
import runEngine from '../core.js'
import { randomNumber } from '../cli.js'

const isPrime = (n) => {
  if (n <= 1) return false
  if (n === 2) return true
  if (n % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const number = randomNumber(99)
  const questionText = number.toString()
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [questionText, correctAnswer]
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

runEngine(description, generateRound)
