import readlineSync from 'readline-sync';
import { welcome } from '../index.js';

export default function gcdTheLogicOfTheGame() {
  const question = 'Find the greatest common divisor of given numbers.';
  const userName = welcome(question);
  let countCorrectAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = Math.floor(Math.random() * 1000);
    const randomNumberTwo = Math.floor(Math.random() * 1000);

    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
    const request = readlineSync.question('Your answer: ');
    const resultRequest = Number(request);
    let check = 0;
    for (let o = 0; o <= randomNumberOne && i <= randomNumberTwo; o += 1) {
      if (randomNumberOne % o === 0 && randomNumberTwo % o === 0) {
        check = o;
      }
    }
    if (resultRequest === check) {
      console.log('Correct!');
      countCorrectAnswer += 1;
    } else if (resultRequest !== check) {
      console.log(`'${request}' is wrong answer ;(. Correct answer was '${check}')`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } if (countCorrectAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
