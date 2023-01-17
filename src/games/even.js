import getPlayed from '../index.js';

const randomNumber = (min, max) => min + Math.round(Math.random() * (max - min));

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkParity = (parity) => parity % 2 === 0;

const generateRound = () => {
  const question = randomNumber(1, 10);
  const correctAnswer = checkParity(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameCheckParity = () => {
  getPlayed(ruleGame, generateRound);
};

export default gameCheckParity;
