import readlineSync from 'readline-sync';

/* Приветствие пользователя */

const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);
};
export default greetingUser;
