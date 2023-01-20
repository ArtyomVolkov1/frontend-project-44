import readlineSync from 'readline-sync';

/* Приветствие пользователя */

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return
};
export default greetingUser;
