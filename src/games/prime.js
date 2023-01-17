
import getPlayed from '../index.js'

const randomNumber = (min, max) => {
    return min + Math.round(Math.random() * (max - min));
  };
  
  const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  randomNumber(1, 10);
  const checkPrime = (number) => {
    for (let i = 2; i < Math.sqrt(number); i += 1) {
        if (number % i === 0) {
            return false;
        }
    } return true
    }
  const generateRound = () => {
    const question = randomNumber(2, 100);;
    const correctAnswer = (checkPrime(question)) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  
  const gameCheckPrime = () => {
    getPlayed(ruleGame, generateRound);
  };
  
  export default gameCheckPrime