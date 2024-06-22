// Define a variable for the username and set it to "shameer"
let username = "shameer";

// Check if the username is defined. If it is, log a personalized greeting; otherwise, log a generic greeting
username ? console.log(`Hello, ${username}!`) : console.log("Hello");

// Define a variable for the user's question about the weather
let userQuestion = "What will the weather be like tomorrow?";

// Log the user's question, including the username
console.log(`${username} has asked - ${userQuestion}`);

// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Define a variable for the eightBall's response
let eightBall = "";

// Use a series of if/else if statements to set the eightBall's response based on the random number
if (randomNumber === 1) {
  eightBall = 'It is certain';
} else if (randomNumber === 2) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 3) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 4) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 5) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 6) {
  eightBall = 'My sources say no';
} else if (randomNumber === 7) {
  eightBall = 'Outlook not so good';
} else {
  eightBall = 'Signs point to yes';
}

// Log the eightBall's response
console.log(eightBall);
