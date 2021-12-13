
// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = null;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const choosePlayerBtn = document.getElementById("choosePlayerBtn");

function showResetButton() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber;
        player1Scoreboard.textContent = player1Score;
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 Turn";
    } else {
        player2Score += randomNumber;
        player2Scoreboard.textContent = player2Score;
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 Turn";
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳";
        showResetButton();
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉";
        showResetButton();
    }
    player1Turn = !player1Turn;
})
 
resetBtn.addEventListener("click", ()=> {
    reset();
})

function reset() {
    choosePlayerBtn.style.display = "block";
    rollBtn.style.display = "none";
    resetBtn.style.display = "none";
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    resetBtn.style.display = "none";
    player2Dice.classList.remove("active");
    player1Dice.classList.remove("active");
    message.textContent = "Click to Choose 1st Player...";

}

choosePlayerBtn.addEventListener("click", () => {
    const evenOrOddNumber = Math.floor( Math.random() * 10);
    if (evenOrOddNumber % 2 === 0) {
        const evenNumber = evenOrOddNumber;
        if (evenNumber) {
            player1Turn = true;
            message.textContent = "Player 1's Turn!";
            choosePlayerBtn.style.display = "none";
            rollBtn.style.display = "block";
            player1Dice.classList.add("active");
        }
    } else {
        const oddNumber = evenOrOddNumber;
        if (oddNumber) {
            player1Turn = false;
            message.textContent = "Player 2's Turn!"
            choosePlayerBtn.style.display = "none";
            rollBtn.style.display = "block";
            player2Dice.classList.add("active");

        }
    }
})

