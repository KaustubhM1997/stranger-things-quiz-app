const chalk = require('chalk')

var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ")

var score = 0; 

console.log(chalk.cyanBright("Welcome ") + chalk.underline(userName) + (" to the ")+ chalk.bgRed.bold("Stranger Things Season 1") + (" quiz *creepy sound in the background*"));

console.log("------------------");

console.log(chalk.yellow("Scoring system: You are awarded ") + chalk.bold("+1") + chalk.yellow(" for every correct answer and ") + chalk.bold("0") + chalk.yellow(" for every incorrect answer.")+ " Let's get started!");

console.log("-----------------------------------------");


function play(question,answer) {

var userAnswer = readlineSync.question(question);

if (userAnswer.toUpperCase() === answer.toUpperCase()) {

  console.log("You are right! ")
  score = score + 1;
}
 else {

   console.log("You are wrong! ")
 }
 
}

var questionOne = {
   question: "What is the date when Will Byers goes missing? ",
   answer: "Nov 6, 1983"
}

var questionTwo = {
  question: "What's the name of the road Will usually takes home from Mike's? ",
   answer: "Mirkwood"
}

var questionThree = {
  question: "What song starts playing in Jonathan's car that reminds him of Will? ",
  answer: "Should I stay or Should I go"
} 

var questionFour = {
  question: "At Steve's house, how does Barb cut her thumb? ",
  answer: "Cutting open a beer can"
} 

var questionFive = {
  question: "What fake name does Eleven use when she goes to the school with Mike? ",
  answer: "Eleanor"
} 


// you can directly insert the above objects in the array below

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for (var i = 0; i < questions.length; i++){

  var currentQuestion = questions[i];
  play (currentQuestion.question, currentQuestion.answer)

}

var highScores = [
  {

  name: "Kaustubh ",
  score: "5"
}, {

  name: "Tanmay ",
  score: "4"

}
]

console.log("YAY you scored! ", score);

console.log("|Game over, thanks for playing!|")

console.log("------------------");


for (var k = 0; k < highScores.length; k++)
{

  var currentHighScore = highScores[k];

  var c = currentHighScore.score;

 if (score > c) {

  // console.log("YAY you scored! ", score);
  console.log("Congratulations," + userName + "!" + " You have beaten the current high score");

}

else {
// 
}
}



for (var j = 0; j < highScores.length; j++)
{ 
  var currentScore = highScores[j];

  var a = currentScore.name;
  var b = currentScore.score;

   console.log("------------------");

  console.log("Check out the high scores:", a, b);

  // console.log("---------");


}