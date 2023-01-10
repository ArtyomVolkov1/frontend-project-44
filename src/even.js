import readlineSync from 'readline-sync';

//  const greeting = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   return 'Hello, ' + userName + ' !';
// }

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');

const greetingUser = () => {
  const greeting = 'Hello, ' + userName + '!';
  console.log(greeting);
};

const randomNumber = (min, max) => {
  return min + Math.round(Math.random() * (max - min));
};

const checkParity = () => {
  greetingUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = randomNumber(1, 50);
    console.log('Question: ', randomNum);
    const answer = readlineSync.question('Your answer: ');
    const checkEven = randomNum % 2 === 0 && answer === 'yes';
    const checkNotEven = randomNum % 2 !== 0 && answer === 'no';
    const errorChoice = answer === 'yes' ? 'no' : 'yes';
    const defeat = `'${answer}' is wrong answer ;(. Correct answer was '${errorChoice}'.\nLet's try again, ${userName} !`;
    if (checkEven || checkNotEven) {
      console.log('Correct!');
    } else {
      console.log(defeat);
      return;
    }
  } console.log('Congratulations, ' + userName + '!');
};

export default checkParity;
