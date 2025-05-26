import readlineSync from 'readline-sync'

export const maxCountValue = 3
export const maxStepGame = 2
export const correctAnswer = 'Correct!'

const welcome = (task) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  if (!task) {
    return
  }
  else {
    console.log(task)
  }
  return name
}

export const congratulations = name => `Congratulations, ${name}!`

export const randomNumber = (factor) => {
  return Math.floor(Math.random() * factor)
}

export const stopGame = (countWin, maxCountValue, name) => {
  if (countWin === maxCountValue) {
    console.log(congratulations(name))
  }
}

export const question = (...randomNum) => {
  if (randomNum.length > 1) {
    const question = randomNum.join(' ')
    console.log(`Question: ${question}`)
  }
  else console.log(`Question: ${randomNum}`)
}

export const userAnswer = () => {
  return readlineSync.question('Your answer: ').toLowerCase().trim()
}

export default welcome
