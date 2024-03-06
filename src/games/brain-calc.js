import readlineSync from 'readline-sync';
import {
  welcome, isWrongAnswer, random, questions, congratulations,
} from '../index.js';

function calcFirstStepGames() {
  const question = 'What is the result of the expression?';
  const userName = welcome(question);
  let countCorrectAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumberOne = random(0, 100);
    const randomNumberTwo = random(0, 100);

    const sings = ['+', '-', '*'];
    const znak = random(0, 2);
    const action = sings[znak];
    const resultExpression = `${randomNumberOne} ${action} ${randomNumberTwo}`;

    questions(resultExpression);
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
      isWrongAnswer(resultRequest, check, userName);
      countCorrectAnswer += 1;
    } else if (resultRequest !== result) {
      isWrongAnswer(request, check, userName);
      break;
    }
  } if (countCorrectAnswer === 3) {
    congratulations(userName);
  }
}

export default calcFirstStepGames;
