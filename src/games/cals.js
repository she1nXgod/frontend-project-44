import engine from '../index.js';
import { randomNum } from '../utils.js';

export default () => {
  const rule = 'What is the result of the expression?';

  const generateRound = () => {
    const operators = ['+', '-', '*'];
    const a = randomNum(1, 10);
    const b = randomNum(1, 10);
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

  engine(rule, generateRound);
};
