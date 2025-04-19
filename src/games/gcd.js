import engine from '../index.js';
import { randomNum } from '../utils.js';

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const a = randomNum(1, 100);
    const b = randomNum(1, 100);
    for (let i = a; i > 0; i -= 1) {
      if (a % i === 0 && b % i === 0) {
        return {
          question: [a, b].join(' '),
          answer: i.toString(),
        };
      }
    }
    return false;
  };

  engine(rule, generateRound);
};
