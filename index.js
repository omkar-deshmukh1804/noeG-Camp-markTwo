import chalk from 'chalk';
import readlineSync from 'readline-sync'

//markTwo - Fandom quiz

var marvelScore = 0;
var userName = '';

let marvelQuestions = 
  [
    {
      question : "Which of the characters is NOT an original Avenger?",
      answer: "Scarlet Witch"
    },
    {
      question : "What's Captain America’s shield made of?",
      answer: "Vibranium"
    },
    {
      question : "What's Black Widow's actual name?",
      answer: "Natasha Romanoff"
    },
    {
      question : "How many Infinity Stones are there?",
      answer: "Six"
    },
    {
      question : "Who does Captain America give his shield to in Avengers: Endgame?",
      answer: "Sam"
    },
    {question : "What is Thor’s ax’s name that was created for him in Avengers: Infinity War?",
      answer: "Stormbreaker"
    },
    {
      question : "What is the name of the cube that Loki utilizes to power up his weapons?",
      answer: "Tesseract"
    },
    {
      question : "What’s the name of Tony Stark’s company?",
      answer: "Stark Industries"
    },
    {
      question : "What’s the name of Thor’s homeworld?",
      answer: "Asgard"
    },
    {
      question : "What is Agent Coulson’s first name?",
      answer: "Phil"
    }
  ]
  
const welcomeFan = () =>{
  userName = readlineSync.question(chalk.bgRed.bold.black("Please enter your name "))
  console.log(chalk.green("Welcome to the Marvel 🚀 quiz game!", chalk.green(userName)))
}

let shouldBreak = false;

const playMarvelGame = () =>{
  marvelQuestions.map((item ,index)=>{
      if (shouldBreak) return;
      if (index==5 && marvelScore<4){
        console.log(chalk.bgBlue.bold.white("You've finished Level 1"))
        shouldBreak = true
      }
      else{
          if (index==5 && marvelScore>=4){
console.log(chalk.bgWhiteBright.bold.magentaBright("Congratulations!! You've completed level 1!! Be ready for level 2! 👾"))
          }
        marvelLogic(item.question, item.answer) 
      }
  })

  displaymarvelScore()
}

const marvelLogic = (question, answer) =>{
  let answerReceived = readlineSync.question(chalk.yellow(question))

  if (answerReceived.toLowerCase()==answer.toLowerCase()){
    marvelScore++;
    console.log(chalk.green("You are correct!! "))
  }else{
    console.log(chalk.red("You are wrong :( "))
  }
  console.log(chalk.magenta("---------------------------------"))
}

const displaymarvelScore = () =>{
  console.log(chalk.bold.whiteBright("Final Score is: ", marvelScore))
  if(marvelScore>6){
    console.log(chalk.bgYellow.bold.black("YAYYYY!! You have the highest score!! 🤑"))
  }else{
    console.log(chalk.bgYellow.bold.black("Better Luck Next Time 👍"))
  }
}

welcomeFan()
playMarvelGame() 