import getPlayed from '../index.js'

export const randomNumber = (min, max) => {
    return min + Math.round(Math.random() * (max - min));
  };

  const ruleGame = 'What number is missing in the progression?'

  const progression = () => {
    const lengthProgression = 10;
    let numProgression =  randomNumber(1, 19);
    const stepPosition = randomNumber(2, 5);
    const result = [];
    for (let i = 0; i < lengthProgression; i += 1) {
        result.push(numProgression);
        numProgression += stepPosition;
    } return result;
  };  
  
  const generateRound = () => {
    let progressions = progression();
    let randomNum = randomNumber(1, 9);
    const correctAnswer = progressions[randomNum];
    progressions[randomNum] = '..';
    const question = progressions.join(' ');
    return [question, String(correctAnswer)];
  };

  const gameProgression = () => {
    getPlayed(ruleGame, generateRound);
  };

  export default gameProgression;


