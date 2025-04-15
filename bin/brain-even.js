#!/usr/bin/env node
import readlineSync from 'readline-sync';

let getCurrName;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
function greetingUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  getCurrName = name;
  console.log(`Hello, ${name}!\n${rule}`);
  return name;
}
greetingUser();

const getRandomNum = () => Math.floor(Math.random() * 100);

const fail = "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!";
function brainEven() {
  for (let i = 0; i < 3; i += 1) {
    const currNum = getRandomNum();
    console.log(`Question: ${currNum}`);
    const answer = readlineSync.question('Your answer: ');
    if ((currNum % 2 === 0 && answer === 'yes') || (currNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(fail);
      return answer;
    }
  }
  console.log(`Congratulations, ${getCurrName}!`);
  return;
}
brainEven();
