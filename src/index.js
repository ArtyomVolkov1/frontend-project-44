import readlineSync from 'readline-sync';

/* Случайные числа */
export const oneRandomNumber = (min, max) => {
  return min + Math.round(Math.random() * (max - min));
};
export const twoRandomNumber = (min, max) => {
  return min + Math.round(Math.random() * (max - min));
};

/* Общая логика для всех игр */
const getPlayed = (ruleGame, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const greeting = 'Hello, ' + userName + '!';
  console.log(greeting);
  console.log(ruleGame);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log('Question: ', question);
    const answerUser = readlineSync.question('Your answer: ');
    if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      const wrongAnswer = `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName} !`;
      console.log(wrongAnswer);
      return;
    }
  }  console.log('Congratulations, ' + userName + '!');
};

export default getPlayed;
