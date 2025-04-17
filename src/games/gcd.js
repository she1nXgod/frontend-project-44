import { greetingUser, randomNum, engine } from '../index.js';

export default () => {
  const userName = greetingUser();
  console.log('Find the greatest common divisor of given numbers.');

  const generateRound = () => {
    const a = randomNum(100);
    const b = randomNum(100);
    for (let i = a; i > 0; i -= 1) {
      if (a % i === 0 && b % i === 0) {
        return {
          question: [a, b].join(' '),
          answer: i.toString(),
        };
      }
    }
  };

  engine(userName, generateRound);
};
