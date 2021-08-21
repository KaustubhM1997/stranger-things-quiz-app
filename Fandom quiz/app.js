const chalk = require('chalk')

var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ")

var score = 0;

console.log(chalk.cyanBright("\nWelcome ") + chalk.underline(userName) + (" to the ") + chalk.bgRed.bold("Stranger Things Season 1") + (" quiz *creepy sound in the background*"));

console.log("------------------");

console.log(chalk.yellow("Scoring system: You are awarded ") + chalk.bold("+1") + chalk.yellow(" for every correct answer and ") + chalk.bold("0") + chalk.yellow(" for every incorrect answer.") + " Let's get started!");

console.log("-----------------------------------------");


function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {

    console.log("\nYou are right!\n ")
    score = score + 1;
  } else {

    console.log("\nYou are wrong!\n ")
  }

}

var questionOne = {
  question: `What is the date when Will Byers goes missing?\n 
   a) April 14, 1983
   b) Nov 6, 1983
   c) Sept 13, 1982\n`,
  answer: "b"
}

var questionTwo = {
  question: `What's the name of the road Will usually takes home from Mike's?\n
   a) Dogwood
   b) Paradise
   c) Mirkwood\n`,
  answer: "c"
}

var questionThree = {
  question: `What song starts playing in Jonathan's car that reminds him of Will?\n
   a) Should I stay or Should I go
   b) "Here I Go Again" by Whitesnake
   c) "Heroes" by Peter Gabriel\n`,
  answer: "a"
}

var questionFour = {
  question: `At Steve's house, how does Barb cut her thumb?\n
   a) Cutting open a beer can
   b) Picking up a broken glass bottle
   c) Slamming it in the car door\n`,
  answer: "a"
}

var questionFive = {
  question: `What fake name does Eleven use when she goes to the school with Mike?
   a) Emily
   b) Elizabeth
   c) Eleanor\n`,
  answer: "c"
}

var questionSix = {
  question: `Who created Stranger Things?
   a) Warner Bros
   b) Duffer Brothers
   c) Christopher Nolan\n`,
  answer: "b"
}


// you can directly insert the above objects in the array below

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];

for (var i = 0; i < questions.length; i++) {

  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)

}

var highScores = [{

  name: "Kaustubh ",
  score: "6"
}, {

  name: "Tanmay ",
  score: "5"

}]

console.log("YAY " + userName + "," + " you scored: ", score);

console.log("|Game over, thanks for playing!|")

console.log("------------------");


for (var k = 0; k < highScores.length; k++) {

  var currentHighScore = highScores[k];

  var c = currentHighScore.score;

  if (score > c) {

    // console.log("YAY you scored! ", score);
    console.log("Congratulations," + userName + "!" + " You have beaten the current high score");

  } else {
    // 
  }
}

console.log("\nCheck out the high scores:\n");

for (var j = 0; j < highScores.length; j++) {
  var currentScore = highScores[j];

  var a = currentScore.name;
  var b = currentScore.score;

  //  console.log("------------------");

  console.log(a, b);

  // console.log("---------");


}