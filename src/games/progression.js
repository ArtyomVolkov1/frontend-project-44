import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const ruleGame = 'What number is missing in the progression?';

const generateProgression = (num, step, length) => {
  const progression = [];
  let memberProgression = num;
  for (let i = 0; i < length; i += 1) {
    progression.push(memberProgression);
    memberProgression += step;
  }
  return progression;
};

const generateRound = () => {
  const memberProgression = getRandomInRange(1, 19);
  const stepProgression = getRandomInRange(2, 5);
  const lengthProgression = 10;
  const progression = generateProgression(memberProgression, stepProgression, lengthProgression);
  const getRandomIndex = getRandomInRange(1, 9);
  const correctAnswer = progression[getRandomIndex];
  progression[getRandomIndex] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const runProgressionGame = () => {
  runEngine(ruleGame, generateRound);
};

export default runProgressionGame;
