import welcome, { maxCountValue, maxStepGame, correctAnswer, question, userAnswer, stopGame } from './cli.js'

const runEngine = (gameDescription, generateRound) => {
  const name = welcome(gameDescription)
  let countWin = 0

  for (let i = 0; i <= maxStepGame; i++) {
    const [questionText, correctAnswerText] = generateRound()

    question(questionText)
    const answer = userAnswer()

    if (answer === correctAnswerText.toString()) {
      console.log(correctAnswer)
      countWin += 1
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswerText}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  stopGame(countWin, maxCountValue, name)
}

export default runEngine
