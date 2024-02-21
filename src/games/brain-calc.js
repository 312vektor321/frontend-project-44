import readlineSync from 'readline-sync';
import { welcome } from '../index.js';

function calcFirstStepGames() {
  const question = 'What is the result of the expression?';
  const userName = welcome(question);
  const countCorrectAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = Math.floor(Math.random() * 100);
    const randomNumberTwo = Math.floor(Math.random() * 100);

    const sings = ['+', '-', '*'];
    const znak = Math.floor(Math.random() * 3);
    const action = sings[znak];
    const resultExpression = `${randomNumberOne} ${action} ${randomNumberTwo}`;

    console.log(`Question: ${resultExpression} `);
    const request = readlineSync.question('Your answer: ');
    const resultRequest = Number(request);
    let check = randomNumberOne + action + randomNumberTwo;
    let result = 0;
    switch (action) {
      case '+':
        check = randomNumberOne + randomNumberTwo;
        result = check;
        break;
      case '-':
        check = randomNumberOne - randomNumberTwo;
        result = check;
        break;
      default:
        check = randomNumberOne * randomNumberTwo;
        result = check;
    } if (resultRequest === result) {
      console.log('Correct!');
      countCorrectAnswer.push('Correct');
    } else if (resultRequest !== result) {
      console.log(`${request} is wrong answer ;(. Correct answer was ${check})`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } if (countCorrectAnswer.length === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export default calcFirstStepGames;
