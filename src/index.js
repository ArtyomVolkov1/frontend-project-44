import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (ruleGame, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleGame);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      const wrongAnswer = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      console.log(wrongAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
