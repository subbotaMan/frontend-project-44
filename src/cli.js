import readlineSync from "readline-sync";

const welcome = (task) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  if (!task) {
    null;
  } else {
    console.log(task);
  }

  return name;
};

export const congratulations = (name) =>
  console.log(`Congratulations, ${name}!`);

export const answer = () => {
  return readlineSync.question("Your answer: ");
};

export const randomNumberOne = () => {
  return Math.floor(Math.random() * 99);
};

export const randomNumberSecond = () => {
  return Math.floor(Math.random() * 100);
};

export default welcome;
