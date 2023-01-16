import getPlayed from '../index.js';

const randomNumber = (min, max) => {
  return min + Math.round(Math.random() * (max - min));
};

const ruleGame = 'Find the greatest common divisor of given numbers.'

const generateRound = () => {
    const oneNumber = randomNumber(1, 20);
    const twoNumber = randomNumber(0, 20);
     let a = oneNumber;
     let b = twoNumber;
    let i = a;
    while (a % i !== 0 || b % i !== 0) {
      i -= 1;
    };
    const question = String(`${oneNumber} `) + String(` ${twoNumber}`);
    const correctAnswer = question ? Math.abs(i) : false;
    return [question, String(correctAnswer)];
  };

  const gameGcd = () => {
    getPlayed(ruleGame, generateRound);
  };

  export default gameGcd;