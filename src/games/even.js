import getPlayed from '../index.js';

const randomNumber = (min, max) => min + Math.round(Math.random() * (max - min));

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (parity) => parity % 2 === 0;

const generateRound = () => {
  const question = randomNumber(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [String(question), String(correctAnswer)];
};

const gameCheckParity = () => {
  getPlayed(ruleGame, generateRound);
};

export default gameCheckParity;
