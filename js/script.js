let playerOneInput = document.querySelector(".playerOneInput")
let playerOneButton = document.querySelector(".playerOneButton")
let playerTwoInput = document.querySelector(".playerTwoInput")
let playerTwoButton = document.querySelector(".playerTwoButton")
let playerThreeInput = document.querySelector(".playerThreeInput")
let playerThreeButton = document.querySelector(".playerThreeButton")
let player = document.querySelector(".player")

let chance = document.querySelector(".chance")

let error = document.querySelector(".error")

let count = 5
let twoCount = 5
let threeCount = 5

playerOneButton.addEventListener("click", function () {
    if (!playerOneInput.value) {
        error.innerHTML = "Please enter a something"
    } else {
        if (!(playerOneInput.value - 12)) {
            error.innerHTML = "Please enter a number"
        } else {
            if (playerOneInput.value < 10 && playerOneInput.value > 0) {
                playerOneInput.style.display = "none"
                playerOneButton.style.display = "none"
                playerTwoInput.style.display = "inline-block"
                playerTwoButton.style.display = "inline-block"
                chance.innerHTML = `Chance: ${count}`
                error.innerHTML = ""
                player.innerHTML = "Player 2"
            } else {
                error.innerHTML = "Please enter a number between 1 to 10"
            }
        }
    }
})




playerTwoButton.addEventListener("click", function () {
    if (count > 1) {
        count--
        chance.innerHTML = `Chance: ${count}`
        if (playerOneInput.value == playerTwoInput.value) {
            player.innerHTML = "Player 3"
            playerTwoInput.style.display = "none"
            playerTwoButton.style.display = "none"
            playerThreeInput.style.display = "inline-block"
            playerThreeButton.style.display = "inline-block"
            error.innerHTML = ""
            chance.innerHTML = `Chance: ${twoCount}`
        }
    } else {
        count = 0
        chance.innerHTML = `Chance: ${count}`
        if (playerOneInput.value == playerTwoInput.value) {
            player.innerHTML = "Player 3"
            playerTwoInput.style.display = "none"
            playerTwoButton.style.display = "none"
            playerThreeInput.style.display = "inline-block"
            playerThreeButton.style.display = "inline-block"
            error.innerHTML = ""
            chance.innerHTML = `Chance: ${twoCount}`
        } else {
            player.innerHTML = "Player 3"
            playerTwoInput.style.display = "none"
            playerTwoButton.style.display = "none"
            playerThreeInput.style.display = "inline-block"
            playerThreeButton.style.display = "inline-block"
            error.innerHTML = ""
            chance.innerHTML = `Chance: ${twoCount}`
        }
    }
})


playerThreeButton.addEventListener("click", function () {
    if (twoCount > 1) {
        twoCount--
        chance.innerHTML = `Chance: ${twoCount}`
        if (playerOneInput.value == playerTwoInput.value && playerTwoInput.value == playerThreeInput.value) {
            player.innerHTML = "Player 2 and Player 3 Winner"
            playerThreeButton.style.display = "none"
        } else {
                if (playerOneInput.value == playerThreeInput.value) {
                    player.innerHTML = "Player 3 Winner"
                    playerThreeButton.style.display = "none"
                }
            
        }
    } else {
        twoCount = 0
        chance.innerHTML = `Chance: ${twoCount}`
        if (playerOneInput.value == playerTwoInput.value && playerTwoInput.value == playerThreeInput.value) {
            player.innerHTML = "Player 2 and Player 3 Winner"
            playerThreeButton.style.display = "none"
        } else {
            if (playerOneInput.value == playerTwoInput.value) {
                player.innerHTML = "Player 2 Winner"
                playerThreeButton.style.display = "none"
            } else {
                if (playerOneInput.value == playerThreeInput.value) {
                    player.innerHTML = "Player 3 Winner"
                    playerThreeButton.style.display = "none"
                }else{
                    player.innerHTML = "Player 1 Winner"
                    playerThreeButton.style.display = "none"
                }
            }
        }
    }
})