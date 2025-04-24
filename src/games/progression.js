import engine from '../index.js';
import { randomNum } from '../utils.js';

export default () => {
  const rule = 'What number is missing in the progression?';

  const generateRound = () => {
    const num = randomNum(1, 50);
    const interval = randomNum(1, 5);
    const corrIndex = randomNum(0, 9);
    let currNum = num;
    const progression = [];
    const rounds = 10;
    for (let i = 0; i < rounds; i += 1) {
      progression.push(currNum);
      currNum += interval;
    }
    const corrAnswer = progression[corrIndex];
    progression[corrIndex] = '..';
    return {
      question: progression.join(' '),
      answer: corrAnswer.toString(),
    };
  };

  engine(rule, generateRound);
};
