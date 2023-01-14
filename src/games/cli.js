import readlineSync from 'readline-sync';
// const readlineSync = require("readline-sync");

/* Приветствие пользователя */

const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  const greeting = 'Hello, ' + userName + '!';
  console.log(greeting);
  return;
};
export default greetingUser;
