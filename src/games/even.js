import { greetingUser, randomNum, engine } from '../index.js';

export default () => {
  const userName = greetingUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const generateRound = () => {
    const num = randomNum(1, 100);
    return {
      question: num,
      answer: num % 2 === 0 ? 'yes' : 'no',
    };
  };

  engine(userName, generateRound);
};
