import readlineSync from 'readline-sync';
import greetingUser from '../index.js';

export default () => {
  const userName = greetingUser();

  const generateQuestion = () => {
    const operators = ['+', '-', '*'];
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const calculate = {
      '+': (x, y) => x + y,
      '-': (x, y) => x - y,
      '*': (x, y) => x * y,
    };
    return {
      question: `${a} ${operator} ${b}`,
      answer: calculate[operator](a, b).toString(),
    };
  };

  const mainCalcGame = () => {
    for (let i = 0; i < 3; i += 1) {
      const { question, answer } = generateQuestion();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === answer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  mainCalcGame();
};
