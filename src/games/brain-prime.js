import readlineSync from 'readline-sync';
import { random, welcome } from '../index.js';

export default function primeTheLogicOfTheGame() {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const userName = welcome(question);
  let countCorrectAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const num0 = random(0, 100);
    const num1 = num0;
    let simpleNum = '';
    for (let u = 2; u < num1; u += 1) {
      if (num1 % u === 0) {
        simpleNum = 'no';
        break;
      } else {
        simpleNum = 'yes';
      }
    }
    console.log(`Question: ${num1} `);
    const request = readlineSync.question('Your answer: ');
    const resultRequest = request;
    if (resultRequest === simpleNum) {
      console.log('Correct!');
      countCorrectAnswer += 1;
    } else if (resultRequest !== simpleNum) {
      console.log(`'${request}' is wrong answer ;(. Correct answer was '${simpleNum}'.`);
      console.log(`Let's try again, ${userName}!`);

      break;
    }
  } if (countCorrectAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
