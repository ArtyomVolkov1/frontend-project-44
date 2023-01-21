import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const ruleGame = 'What number is missing in the progression?';

const progression = () => {
  const lengthProgression = 10;
  let numProgression = getRandomInRange(1, 19);
  const stepPosition = getRandomInRange(2, 5);
  const result = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    result.push(numProgression);
    numProgression += stepPosition;
  }
  return result;
};

const generateRound = () => {
  const progressions = progression();
  const randomNum = getRandomInRange(1, 9);
  const correctAnswer = progressions[randomNum];
  progressions[randomNum] = '..';
  const question = progressions.join(' ');
  return [question, String(correctAnswer)];
};

const gameProgression = () => {
  runEngine(ruleGame, generateRound);
};

export default gameProgression;
