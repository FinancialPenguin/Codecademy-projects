let userName = ''
let userQuestion = 'Will I ever marry?'

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log(`You asked Magic Eight Ball the following: ${userQuestion}`);
randomNumber = Math.floor(Math.random() * 8);
eightBall = ''

switch (randomNumber) {
  case 0:
  eightBall = 'What did you think the answer would be?'
  break;
  case 1:
  eightBall = 'It is certain.'
  break;
  case 2:
  eightBall = 'Trust your gut.'
  break;
  case 3:
  eightBall = 'I am not sure, honestly.'
  break;
  case 4:
  eightBall = 'If I tell you, I would change the odds.'
  break;
  case 5:
  eightBall = 'Do you even need to ask?'
  break;
  case 6:
  eightBall = 'If that is what you want, go get it.'
  break;
  case 7:
  eightBall = 'Your next chapter has not yet been written, try writing it yourself.'
  break;
  default:
  eightBall = 'I have had a long day, try again tomorrow.'
  break;
}
console.log(`Magic Eight Ball responds: ${eightBall}`)
