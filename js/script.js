let totalGames = 0;
let totalWins = 0;


let playerName;
function startGameArcade() {
    playerName = prompt("What is your name?");
    alert("Hello " + playerName + "! Welcome to the Arcade!");
    document.getElementById("gamesList").style.display = "block";
}

function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guessesUsed = 1;
    while (true) {
        let playerChoice = prompt("Guess a number between 1 and 10");
        if (playerChoice == randomNumber) {
            alert(playerName + `, you guessed it in ${guessesUsed} guesses!`);
            totalGames++;
            totalWins++;
            if (confirm("Do you want to play again?")) {
                randomNumber = Math.floor(Math.random() * 10) + 1;
                guessesUsed = 1;
                continue;
            }
            else {
                break;
            }
        }
        else if (playerChoice > randomNumber) {
            alert("Guess was too high, guess again");
        }
        else if (playerChoice < randomNumber) {
            alert("Guess was too low, guess again");
        }
        else {
            alert("Invalid input, please enter a number between 1 and 10");
        }
        guessesUsed++;
    }

    let playAgain = prompt(`${playerName}, Would you like to pick another game to play?  y/n`);
    if (!playAgain || playAgain.toLowerCase() !== 'y') {
        exit();
    }
}

magic8ball = function () {
    const responses = [
        "It is certain",
        "Without a doubt",
        "As I see it, yes",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Reply hazy, try again",
        "Ask again later"
    ];

    while (true) {
        const question = prompt("Ask the Magic Eight Ball a yes or no question:");
        if (question) {
            totalGames++;
            totalWins++;
            const answer = responses[Math.floor(Math.random() * responses.length)];
            alert(answer);
        }
        else {
            alert(playerName + ", Thank you for playing! Farewell!");
            break;
        }

    }


    let playAgain = prompt(`${playerName}, Would you like to pick another game to play?  y/n`);
    if (!playAgain || playAgain.toLowerCase() !== 'y') {
        exit();
    }
}

bnh = () => {
    const choices = ['Bear', 'Ninja', 'Hunter'];

    alert('Hi ' + playerName + ', let\'s play!!');

    while (true) {
        let playerChoice = prompt('Who are you: Bear, Ninja, or Hunter?');
        if (!playerChoice) {
            alert('Game cancelled. Please refresh the page to play again.');
            break;
        }

        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

        if (!choices.includes(playerChoice)) {
            alert('Invalid choice! Please enter Bear, Ninja, or Hunter.');
            break;
        }

        const randomIndex = Math.floor(Math.random() * choices.length);
        let computerChoice = choices[randomIndex];

        for (let i = 3; i >= 0; i--) {
            alert(i);
            console.log(i);
        }

        let gameStatus;
        if (playerChoice === computerChoice) {
            totalGames++;
            gameStatus = 'Tie';
        }
        else if (
            playerChoice === 'Bear' && computerChoice === 'Ninja' ||
            playerChoice === 'Ninja' && computerChoice === 'Hunter' ||
            playerChoice === 'Hunter' && computerChoice === 'Bear'
        ) {
            totalGames++;
            totalWins++;
            gameStatus = 'Win';
        }
        else {
            totalGames++;
            gameStatus = 'Lose';
        }

        alert('You ' + gameStatus + '!');

        let playAgain = prompt(`${playerName}, Would you like to keep playing this game? y/n`);
        if (!playAgain || playAgain.toLowerCase() !== 'y') {
            alert('Thanks for playing! Refresh the page to play again.');
            break;
        }
    }
    let playAgain = prompt(`${playerName}, Would you like to pick another game to play?  y/n`);
    if (!playAgain || playAgain.toLowerCase() !== 'y') {
        exit();
    }
}

function exit() {
    alert('Thank you for playing ' + playerName + '! You played ' + totalGames + ' games and won ' + totalWins + ' games, with an average win rate of ' + (totalWins / totalGames * 100).toFixed(2) + '%.');
    document.getElementById('stats').innerHTML = `
        <h2>Game Statistics</h2>
        <table>
            <thead>
                <tr>
                    <th>Games Played</th>
                    <th>Games Won</th>
                    <th>Win Percentage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${totalGames}</td>
                    <td>${totalWins}</td>
                    <td>${(totalWins / totalGames * 100).toFixed(2)}%</td>
                </tr>
            </tbody>
        </table>
    `
    document.getElementById('exit').style.display = 'block';
    const winpercentage = (totalWins / totalGames)
    roundedWinPercentage = Math.round(winpercentage * 4);
    let medalType;
    switch (roundedWinPercentage) {
        case 0:
            medalType = 'Stone';
            break;
        case 1:
            medalType = 'Bronze';
            break;
        case 2:
            medalType = 'Iron';
            break;
        case 3:
        case 4:
            medalType = 'Silicon';
            break;
    }
    document.getElementById('medal').innerHTML = `
        <h2>🎖️ You won a ${medalType} Medal 🎖️</h2>
    `
}