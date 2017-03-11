(function () {
    'use strict';

    const body = document.querySelector("body");
    const startButton = document.getElementById("start-button");
    const nameField1 = document.getElementById("name1");
    const nameField2 = document.getElementById("name2");


    let playerOneName;
    let playerTwoName;

    const player1 = "O";
    const player2 = "X";
    let currentPlayer;


    // Start game
    startButton.onclick = function() {
        // check for name
        if(nameField1.value === "" || nameField2.value === "") {
            alert("Please enter both names to begin");
        } else {
            playerOneName = nameField1.value;
            playerTwoName = nameField2.value;
            loadGameBoard();
        }
    };

    // Loads game board
    var loadGameBoard = function() {
        const gameHTML = '<div class="board" id="board"> <header> <h1>Tic Tac Toe</h1><ul> <li class="players player1" id="player1"><h2 id="player-one-name">' + playerOneName + '</h2><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></h2svg></li><li class="players player2" id="player2"><h2 id="player-two-name">' + playerTwoName + '</h2><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg></li> </ul> </header> <ul class="boxes"> <li class="box"></li> <li class="box"></li> <li class="box"></li> <li class="box"></li> <li class="box"></li> <li class="box"></li> <li class="box"></li> <li class="box"></li> <li class="box"></li> </ul> </div>';
        body.innerHTML = gameHTML;

        // Add the interaction
        setupBoardInteraction();

        // Set human player to start the game
        setCurrentPlayer(player1);
    };

    function setupBoardInteraction() {
        // Adding mouseover highlight to game squares
        let gameSquares = document.getElementsByClassName("box");
        for(let i = 0; i < gameSquares.length; i++) {
            gameSquares[i].addEventListener("mouseover", function(event) {
                if(checkIfFilled(gameSquares[i])) {
                    console.log("This box is filled. You can't select or use it")
                } else {
                    if (currentPlayer = "O") {
                        this.style.backgroundImage = "url('./img/o.svg')";
                        this.style.backgroundRepeat = "no-repeat";
                        this.style.backgroundSize = "cover";
                    } else {
                        this.style.backgroundImage = "url('./img/x.svg')";
                        this.style.backgroundRepeat = "no-repeat";
                        this.style.backgroundSize = "cover";
                    }

                    console.log("adding background");
                }
            });

            // On mouse out, the background image disappears
            gameSquares[i].addEventListener("mouseout", function(event) {
                if(checkIfFilled(gameSquares[i])) {
                    console.log("This box is filled. Leave it alone.")
                } else {
                    this.style.background = "#EFEFEF";
                }
            });

            // Add click listener for user selection
            gameSquares[i].addEventListener("click", function(event) {
                if(checkIfFilled(gameSquares[i])) {
                    console.log("This box is filled. Leave it alone.")
                } else {
                    if(currentPlayer == player1) {
                        console.log("adding class");
                        this.classList.add("box-filled-1");
                    } else {
                        this.classList.add("box-filled-2");
                    }
                    // Computer won't actually click. The selection will be done programatically
                        // Check if there's a winner or tie
                    // If not, Change currentPlayer to opposite player
                    if(currentPlayer === player1) {
                        setCurrentPlayer(player2);
                    } else {
                        setCurrentPlayer(player1);
                    }
                }
            });
        }
    }


    // Allows turns by setting the player
    function setCurrentPlayer(playerName) {
        const humanPlayerBox = document.getElementById("player1");
        const computerPlayerBox = document.getElementById("player2");

        currentPlayer = playerName;

        if(currentPlayer === "O") {
            humanPlayerBox.classList.add("active");
        } else {
            computerPlayerBox.classList.add("active");
        }
    }

    function checkIfFilled(box) {
        return box.classList.contains("box-filled-1") || box.classList.contains("box-filled-2");
    }

}());

