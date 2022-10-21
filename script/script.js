const buttons = document.getElementsByClassName("playerChoice")
const enemyPicture = document.getElementById('enemyPicture')
const enemyPick = document.getElementById('enemyPick')
const stateText = document.getElementById('stateText')
const playerScoreText = document.getElementById('playerScore')
const enemyScoreText = document.getElementById('enemyScore')

let playerScore = 0
let enemyScore = 0

const startGame = (playerChoice) => {
    enemyChoice = Math.floor(Math.random() * 3)
    let state = ""

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected')
    }

    switch (playerChoice) {
        case "rock":
            buttons[0].classList.add('selected')
            break
        case "paper":
            buttons[1].classList.add('selected')
            break
        case "scissors":
            buttons[2].classList.add('selected')
            break
    }

    switch (enemyChoice) {
        case 0:
            enemyPick.innerHTML = `<img src="images/enemyRock.png" alt="Rock">`
            if(playerChoice === "rock")
                state = "tie"
            else if(playerChoice === "paper")
                state = "win"
            else
                state = "lose" 
            break
        case 1:
            enemyPick.innerHTML = `<img src="images/enemyPaper.png" alt="Paper">`
            if(playerChoice === "rock")
                state = "lose"
            else if(playerChoice === "paper")
                state = "tie"
            else
                state = "win" 
            break
        case 2:
            enemyPick.innerHTML = `<img src="images/enemyScissors.png" alt="Scissors">`
            if(playerChoice === "rock")
                state = "win"
            else if(playerChoice === "paper")
                state = "lose"
            else
                state = "tie" 
            break
    }

    switch (state) {
        case "tie":
            enemyPicture.innerHTML = `<img src="images/tie.png" alt="Tie">`
            stateText.innerHTML = `It's a tie!`
            break
        case "win":
            enemyPicture.innerHTML = `<img src="images/enemyLose.png" alt="Lose">`
            stateText.innerHTML = `Player wins!`
            playerScore++
            break
        case "lose":
            enemyPicture.innerHTML = `<img src="images/enemyWin.png" alt="Win">`
            stateText.innerHTML = `Pepe wins!`
            enemyScore++
            break
    }

    updateScore(playerScore, enemyScore)
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        startGame(this.id)
    })
}

const updateScore = (playerScore, enemyScore) => {
    playerScoreText.innerHTML = playerScore
    enemyScoreText.innerHTML = enemyScore
}