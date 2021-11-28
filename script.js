"use strict";

/*
// the code with comments and explain

// SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// math.trunc will remove the decimal part for example: it will turn 19.99999 to 19. math.random() will give us a random number between 0 and 1 so when we remove decimals the highest number is 19 (19.999...) so we did the + 1 to reach the 20

let score = 20;
// this is the official value of the score but we want to mutate it later, because each time that the answer is wrong, the score value drops by 1

let highscrore = 0;
// starting it with 0 means the first score is always gonna be the highscore because it's bigger than 0

// an EVENT is something that happens on the page for example: a mouse click, a mouse moving, a key press etc.
// and with an EVENT LISTENER we can wait for a certain event to happen, and then react to it

// first we are selecting where the event should happen (here on the check! button element):
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // we need to store the input value somewhere so we declared a variable for it, and we truned it into a number because the value that the user will give us is a string, and at the some point in the game we need to compare it to a random number (the secret number) so this must be a number

  if (!guess) {
    document.querySelector(".message").textContent = "⛔  No Number!";
    // what will happen if there is no guess? we will recieve 0 which is a falsy value, so guess in this condition is false and !guess is true
  } else if (guess === secretNumber) {
    // what should happen if the guess is correct
    document.querySelector(".message").textContent = "🎉  Correct Number!";

    // also we want to change the background to green and make the number a little wider:
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem"; // 15rem * 2
    // so these are inline styles (applied directly to the HTML using style attribute), that means we are not changing the css files themselves

    document.querySelector(".number").textContent = secretNumber;
    // we want the secret number to appear only when the player guess it correctly

    if (score > highscrore) {
      highscrore = score;
      document.querySelector(".highscore").textContent = highscrore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      // we want all of this to happen if the score is above 1, because if the score go below 1 we want the user to lose the game

      // what should happen if the guess is bigger than the correct number
      document.querySelector(".message").textContent = "📈 Too High!";

      // we want the score number drops by 1, each time the answer is wrong
      score--;
      // now we want to display the new score in the element
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      // we want all of this to happen if the score is above 1, because if the score go below 1 we want the user to lose the game

      // what should happen if the guess is smaller than the correct number
      document.querySelector(".message").textContent = "📉 Too Low!";

      // we want the score number drops by 1, each time the answer is wrong
      score--;
      // now we want to display the new score in the element
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥  You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
// in the addEventListener first we need to say what the event should be, by passing it as argument to the function
// but then we need to tell the event listener what should do when the event happens, by passing eventHandler function as the second argument
// we don't call this function enywhere, we only defined it and passed it as an argument to the addEventListener function

Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // we dont't want a new secretNumber variable, we are going to mutate the first one and calculate another random number for it when the game restarts

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
*/

// the code without comments and explain

// refactoring means we change the structure of our code but keep it working still, it's for removing duplicate codes and apply the DRY principle:

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No number!");
    // this is basically: document.querySelector(".message").textContent = "⛔ No number!"
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // this condition means if guess > secretNumber or guess < secretNumber
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      // this is the only thing that changes between these two conditions, we handled it using ternary operator
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
