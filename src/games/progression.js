import { greetingUser, randomNum, engine } from '../index.js';

export default () => {
  const userName = greetingUser();
  console.log('What number is missing in the progression?');

  const generateRound = () => {
    const num = randomNum(1, 50);
    const interval = randomNum(1, 5);
    const corrIndex = randomNum(0, 9);
    let currNum = num;
    const progression = [];
    for (let i = 0; i < 10; i += 1) {
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

  engine(userName, generateRound);
};
