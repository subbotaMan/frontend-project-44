#!/usr/bin/env node
import runEngine from '../core.js'
import { randomNumber } from '../cli.js'

const operators = ['+', '-', '*']
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const generateRound = () => {
  const num1 = randomNumber(99)
  const num2 = randomNumber(99)
  const operator = operators[Math.floor(Math.random() * operators.length)]
  const questionText = `${num1} ${operator} ${num2}`
  const correctAnswer = operations[operator](num1, num2).toString()
  return [questionText, correctAnswer]
}

const description = 'What is the result of the expression?'

runEngine(description, generateRound)
