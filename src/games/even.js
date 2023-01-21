import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (parity) => parity % 2 === 0;

const generateRound = () => {
  const num = getRandomInRange(1, 50);
  const question = num;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameCheckParity = () => {
  runEngine(ruleGame, generateRound);
};

export default gameCheckParity;
