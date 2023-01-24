import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkNumberIsEven = (parity) => parity % 2 === 0;

const generateRound = () => {
  const num = getRandomInRange(1, 50);
  const question = num;
  const correctAnswer = checkNumberIsEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const isEvenGame = () => {
  runEngine(ruleGame, generateRound);
};

export default isEvenGame;
