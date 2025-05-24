import readlineSync from 'readline-sync'

export const congratulations = name =>
  console.log(`Congratulations, ${name}!`)

export const answer = () => {
  return readlineSync.question('Your answer: ')
}

export const randomNumber = (factor) => {
  return Math.floor(Math.random() * factor)
}
