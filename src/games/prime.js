import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomInRange(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runIsPrimeGame = () => {
  runEngine(ruleGame, generateRound);
};

export default runIsPrimeGame;
