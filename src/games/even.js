import engine from '../index.js';
import { randomNum } from '../utils.js';

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const num = randomNum(1, 100);
    return {
      question: num,
      answer: num % 2 === 0 ? 'yes' : 'no',
    };
  };

  engine(rule, generateRound);
};
