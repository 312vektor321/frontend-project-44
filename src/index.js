import readlineSync from 'readline-sync';

export const random = (min, max) => Math.round(Math.random() * (max - min) + min);

export const welcome = (question) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(question);
  return userName;
};
