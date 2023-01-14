import getPlayed from '../index.js';

const oneRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
const twoRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
const operation = ['-', '+', '*'];
const mathOperations = (arr) => {
  const math = [Math.floor(Math.random() * arr.length)];
  return arr[math];
};

const ruleGame = 'What is the result of the expression?';

const generateRound = () => {
  let calculMath;
  const oneNumber = oneRandomNumber(10);
  const twoNumber = twoRandomNumber(10);
  const randomMathOperation = mathOperations(operation);
  const question =
    String(oneNumber) + ` ${randomMathOperation} ` + String(twoNumber);
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
  const correctAnswer = question ? calculMath : false;
  return [question, String(correctAnswer)];
};

const gameCalculator = () => {
  getPlayed(ruleGame, generateRound);
};

export default gameCalculator;
