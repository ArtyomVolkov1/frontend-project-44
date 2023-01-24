import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[getRandomInRange(0, 2)];
};

const ruleGame = 'What is the result of the expression?';

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} - is incorrect`);
  }
};
const generateRound = () => {
  const firstValue = getRandomInRange(1, 10);
  const secondValue = getRandomInRange(1, 10);
  const randomMathOperation = getRandomOperator();
  const question = `${firstValue} ${randomMathOperation} ${secondValue}`;
  const correctAnswer = calculation(firstValue, secondValue, randomMathOperation);
  return [question, String(correctAnswer)];
};

const runCalculatorGame = () => {
  runEngine(ruleGame, generateRound);
};

export default runCalculatorGame;
