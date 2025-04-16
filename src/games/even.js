import readlineSync from 'readline-sync';
import greetingUser from '../index.js';

export default () => {
  const userName = greetingUser();

  const getRandomNum = () => Math.floor(Math.random() * 100);

  const fail = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
  const mainEvenGame = () => {
    for (let i = 0; i < 3; i += 1) {
      const currNum = getRandomNum();
      console.log(`Question: ${currNum}`);
      const answer = readlineSync.question('Your answer: ');
      if ((currNum % 2 === 0 && answer === 'yes') || (currNum % 2 !== 0 && answer === 'no')) {
        console.log('Correct!');
      } else {
        console.log(fail);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  mainEvenGame();
};
