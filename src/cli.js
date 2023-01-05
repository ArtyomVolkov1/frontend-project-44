import readlineSync from 'readline-sync';
// const readlineSync = require("readline-sync");

const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  let greeting;
  if (userName) {
    greeting = `Hello, ${userName}!`;
  }
  return greeting;
};
export default greetingUser;
