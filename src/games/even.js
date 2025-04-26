import engine from '../index.js';
import { randomNum, isEven } from '../utils.js';

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const num = randomNum(1, 100);
    return {
      question: num,
      answer: isEven(num) ? 'yes' : 'no',
    };
  };

  engine(rule, generateRound);
};
