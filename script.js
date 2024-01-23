function getComputerChoice() {
    var a = "Rock";
    var b = "Paper";
    var c = "Scissor";
  
    const stringsArray = [a, b, c];
    const randomIndex = Math.floor(Math.random() * stringsArray.length);
    const randomString = stringsArray[randomIndex];
  
    console.log(`this is computer choice :${randomString}`);
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
        console.log(str);
        return str;
    }

    //determing winner
    if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
      ) {
        var winMessage = `You Win! ${playerSelection} beats ${computerSelection}.`;
        console.log(winMessage);
        return winMessage;
      } else if (
        (playerSelection === "scissor" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor")
      ) {
        var loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        console.log(loseMessage);
        return loseMessage;
      }
}


const playerSelection = "roCk";
console.log(`this is player choice :${playerSelection}`);
const computerSelection = getComputerChoice();
console.log(Rounds(playerSelection, computerSelection));

