import readlineSync from 'readline-sync';

export const random = (min, max) => Math.round(Math.random() * (max - min) + min);

export const welcome = (question) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(question);
  return userName;
};

export const isWrongAnswer = (answerUser, correctAnswer, name) => {
  if (answerUser === correctAnswer) {
    console.log('Correct!')
  } else {
    console.log(`'${answerUser}'  is wrong answer ;(. Correct answer was '${correctAnswer}'`)
    console.log(`Let's try again, ${name} !`)
  }
};

export const congratulations = (name) => {

  console.log(`Congratulations, ${name}!`)
};

export const questions = (question) => {
  console.log(`Question: ${question}`)
}

