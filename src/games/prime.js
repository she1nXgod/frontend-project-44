import engine from '../index.js';
import { randomNum, isPrime } from '../utils.js';

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRound = () => {
    const num = randomNum(2, 100);
    return {
      question: num,
      answer: isPrime(num) ? 'yes' : 'no',
    };
  };

  engine(rule, generateRound);
};
