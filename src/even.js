import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

const greeting = () => {
 return `Hello, ${userName} !`;
}
console.log(greeting());
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumber = (min, max) => {
  return min + Math.round(Math.random() * (max - min));
}

const checkParity = () => {
  for (let i = 0; i < 3; i += 1) {
    const result = randomNumber(1, 50);
    console.log('Question: ', result);
    if (result % 2 === 0) {
      const answer = readlineSync.question('Your answer: ', {
        trueValue: ['yes'],
      });
      if (answer === true) {
        console.log('Correct!');
      } else return (`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName} !`);
    }
    if (result % 2 !== 0) {
      const answer = readlineSync.question('Your answer: ', {
        trueValue: ['no'],
      });
      if (answer === true) {
        console.log('Correct!');
      } else return (`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName} !`);
    }
  } return `Congratulations, ${userName}!`;
}
console.log(checkParity());
export default  checkParity;
// export {userName, greeting, randomNumber, checkParity  };
