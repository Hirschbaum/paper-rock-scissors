const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('You have to choise between paper, rock or scissors.');
    };
};

//console.log(getUserChoice());

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'scissors';
        case 2:
            return 'paper';
    }
}

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'bomb') {
        return 'You destroyed your enemy. You won. Congrats!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won.';
        } else {
            return 'The User won.';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won.';
        } else {
            return 'The User won.';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won.';
        } else {
            return 'The User won.';
        }
    }
}

//console.log(determineWinner('paper', 'rock'));

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log("Your choice is: " + userChoice);
    console.log("The computer choise is: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

console.log(playGame());