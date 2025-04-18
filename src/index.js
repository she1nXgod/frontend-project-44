import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (n) => {
  if (n % 2 === 0 && n > 2) return false;
  const s = Math.sqrt(n);
  for (let i = 3; i <= s; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

const engine = (userName, generateRound) => {
  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  greetingUser, randomNum, engine, isPrime,
};
