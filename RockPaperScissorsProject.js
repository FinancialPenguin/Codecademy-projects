const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid choice. Please try again.')
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'paper';
    case 1:
    return 'scissors';
    case 2:
    return 'rock';}
}

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It is a tie.';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You lost!';
    } else {
      return 'You won!';
    } 
  }
  if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'You lost!';
  } else {
    return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'You lost!';
  } else {
    return 'You won!';
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
