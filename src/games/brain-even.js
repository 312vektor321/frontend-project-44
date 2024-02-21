#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcome } from '../index.js';

export default function evenFirstStepGames() {
  const question = ('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = welcome(question);
  const countCorrectAnswer = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumberOne}`);
    const questionOne = readlineSync.question('Your answer: ');

    if (questionOne !== 'yes' && questionOne !== 'no') {
      console.log('Is wrong answer');
      console.log(`Let's try again, ${userName}.`);
      break;
    } else if (randomNumberOne % 2 === 0) {
      if (questionOne === 'yes') {
        console.log('Correct!');
        countCorrectAnswer.push('Correct');
      } else if (questionOne === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${userName}!`);
        break;
      }
    } else if (randomNumberOne % 2 !== 0) {
      if (questionOne === 'no') {
        console.log('Correct!');
        countCorrectAnswer.push('Correct');
      } else if (questionOne === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${userName}.`);
        break;
      }
    }
  } if (countCorrectAnswer.length === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
