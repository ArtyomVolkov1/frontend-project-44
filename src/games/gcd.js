import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const oneNumber = getRandomInRange(1, 20);
  const twoNumber = getRandomInRange(0, 20);
  const question = `${oneNumber} ${twoNumber}`;
  const correctAnswer = getGcd(oneNumber, twoNumber);
  return [question, String(correctAnswer)];
};

const runGcdGame = () => {
  runEngine(ruleGame, generateRound);
};

export default runGcdGame;
