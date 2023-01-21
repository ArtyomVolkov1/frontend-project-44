import runEngine from '../index.js';
import { getRandomInRange } from '../utils.js';

const operation = ['-', '+', '*'];
const mathOperations = (arr) => {
  const math = [Math.floor(Math.random() * arr.length)];
  return arr[math];
};

const ruleGame = 'What is the result of the expression?';

const generateRound = () => {
  let calculMath;
  const firstValue = getRandomInRange(1, 10);
  const secondValue = getRandomInRange(1, 10);
  const randomMathOperation = mathOperations(operation);
  const question = `${firstValue} ${randomMathOperation} ${secondValue}`;
  switch (randomMathOperation) {
    case '+':
      calculMath = firstValue + secondValue;
      break;
    case '-':
      calculMath = firstValue - secondValue;
      break;
    case '*':
      calculMath = firstValue * secondValue;
      break;
    default:
      return calculMath;
  }
  const correctAnswer = String(calculMath);
  return [question, correctAnswer];
};

const gameCalculator = () => {
  runEngine(ruleGame, generateRound);
};

export default gameCalculator;
