function getComputerChoice() {
    var a = "rock";
    var b = "paper";
    var c = "scissor";
  
    const stringsArray = [a, b, c];
    const randomIndex = Math.floor(Math.random() * stringsArray.length);
    const randomString = stringsArray[randomIndex];
  
    // console.log(`this is computer choice :${randomString}`);
    return randomString;
  }

function Rounds(playerSelection , computerSelection){
    playerSelection = playerSelection.toLowerCase();

    const validMoves = ["rock", "paper" , "scissor"];
    if(validMoves.includes(playerSelection)){
        console.log("valid move");
    }
    else {
        console.log("invalid move");
        return "Invalid move. Please choose rock, paper, or scissors.";
    }

    // checking for a tie
    if(playerSelection === computerSelection){
        var str = "It's a tie! Try again.";
        // console.log(str);
        return str;
    }

    //determing winner
    if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
      ) {
        var winMessage = `You Win! ${playerSelection} beats ${computerSelection}.`;
        // console.log(winMessage);
        return winMessage;
      } else if (
        (playerSelection === "scissor" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor")
      ) {
        var loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
       // console.log(loseMessage);
        return loseMessage;
      }
      return "Unexpected error. Please try again.";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissor):");
        const computerSelection = getComputerChoice();

        console.log(`Round ${round}:`);
        console.log(`Player choice: ${playerSelection}`);
        console.log(`Computer choice: ${computerSelection}`);

        const result = Rounds(playerSelection, computerSelection);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }

        console.log(result);
        console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);
        console.log("------------------");
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie! The game is drawn.");
    }
}

game();


