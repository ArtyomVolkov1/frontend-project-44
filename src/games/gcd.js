import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const oneNumber = getRandomInRange(1, 20);
  const twoNumber = getRandomInRange(0, 20);
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
  runEngine(ruleGame, generateRound);
};

export default gameGcd;
