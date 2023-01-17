import getPlayed from '../index.js';

const randomNumber = (max) => Math.floor(Math.random() * max);

const operation = ['-', '+', '*'];
const mathOperations = (arr) => {
  const math = [Math.floor(Math.random() * arr.length)];
  return arr[math];
};

const ruleGame = 'What is the result of the expression?';

const generateRound = () => {
  let calculMath;
  const oneNumber = randomNumber(10);
  const twoNumber = randomNumber(10);
  const randomMathOperation = mathOperations(operation);
  const question = `${oneNumber} ${randomMathOperation} ${twoNumber}`;
  switch (randomMathOperation) {
    case '+':
      calculMath = oneNumber + twoNumber;
      break;
    case '-':
      calculMath = oneNumber - twoNumber;
      break;
    case '*':
      calculMath = oneNumber * twoNumber;
      break;
    default:
      return calculMath;
  }
  const correctAnswer = calculMath;
  return [question, String(correctAnswer)];
};

const gameCalculator = () => {
  getPlayed(ruleGame, generateRound);
};

export default gameCalculator;
