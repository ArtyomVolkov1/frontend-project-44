import getPlayed from '../index.js';

const randomNumber = (min, max) => min + Math.round(Math.random() * (max - min));

const ruleGame = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const oneNumber = randomNumber(1, 20);
  const twoNumber = randomNumber(0, 20);
  const a = oneNumber;
  const b = twoNumber;
  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    i -= 1;
  }
  const question = `${oneNumber} ${twoNumber}`;
  const correctAnswer = Math.abs(i);
  return [question, String(correctAnswer)];
};

const gameGcd = () => {
  getPlayed(ruleGame, generateRound);
};

export default gameGcd;
