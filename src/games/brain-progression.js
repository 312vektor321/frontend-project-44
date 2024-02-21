#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { random, welcome } from '../index.js';

export default function progressionTheLogicOfTheGame() {
  const question = 'What number is missing in the progression?';
  const userName = welcome(question);
  let countCorrectAnswer = 0;

  for (let i = 0; i < 3; i += 1) {
    const progLength = random(5, 10);
    const progPass = random(0, 10);
    let item = random(0, 10);
    const index = random(0, progLength - 1);
    const progression = [];
    for (let u = 0; u < progLength; u += 1) {
      progression.push(item);
      item += progPass;
    }
    const rightAnswer = progression[index];
    progression[index] = '..';
    console.log(`Question: ${progression}`);
    const request = readlineSync.question('Your answer: ');
    const resultRequest = Number(request);
    if (resultRequest === rightAnswer) {
      countCorrectAnswer += 1;
      console.log('Correct!');
    } else if (resultRequest !== rightAnswer) {
      console.log(`'${request}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } if (countCorrectAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
