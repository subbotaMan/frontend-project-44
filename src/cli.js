import readlineSync from 'readline-sync'

const welcome = () => {
  const value = 'brain-games'
  if (value === 'brain-games') {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
  }
}

export default welcome
