import {
  greetingUser, randomNum, engine, isPrime,
} from '../index.js';

export default () => {
  const userName = greetingUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const generateRound = () => {
    const num = randomNum(2, 100);
    return {
      question: num,
      answer: isPrime(num) ? 'yes' : 'no',
    };
  };

  engine(userName, generateRound);
};
