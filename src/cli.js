import readlineSync from "readline-sync";
// const readlineSync = require("readline-sync");

const differentUserName = () => {
  const userName = readlineSync.question("May I have your name? ");
  if (userName) {
    return "Hello, " + userName + "!";
  }
};
export default differentUserName;
