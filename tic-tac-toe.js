window.addEventListener('DOMContentLoaded', (event)=>{
    let ticTacToe =  document.getElementById("tic-tac-toe-board");

    let i = 0;
    let gameBoard = [0,0,0,0,0,0,0,0,0]


    ticTacToe.addEventListener('click', (event)=>{

        let gameSquare = event.target.id.slice(-1)
        console.log(gameSquare)
        if(gameBoard[gameSquare] == 0){
            if(i === 1){
                let playerO = document.createElement("img")
                playerO.setAttribute('src', 'player-o.svg')

                event.target.appendChild(playerO)
                i = 0;
                gameBoard[gameSquare] = 1
                winCon(gameBoard)

            }else if(i === 0){
                let playerX = document.createElement("img")
                playerX.setAttribute('src', 'player-x.svg')

                event.target.appendChild(playerX)
                i = 1;
                gameBoard[gameSquare] = 2
                winCon(gameBoard)
            }
            else{

            }
        }


    })
    function newGameOn(){
        newGameButton.addEventListener('click', (event)=>{
            event.preventDefault()
            location.reload();
        })

    }


    function playerOWins(){
        document.title = "Winner - Y";
        ticTacToe.removeEventListener('click', (event))
        i = 2
        newGameOn()
    }
    function playerXWins(){
        document.title = "Winner - X";
        ticTacToe.removeEventListener('click', (event))
        i = 2
        newGameOn()
    }
    function playersTie(){
        document.title = "Players have tied";
        newGameOn()
    }

    function winCon(gameBoard) {

        if((gameBoard[0] === gameBoard[3]) && (gameBoard[3] === gameBoard[6]) && gameBoard[0]){
            console.log("A player has won");
            if(gameBoard[0] === 1){
                playerOWins()
            }else{
                playerXWins()
            }
        }else if((gameBoard[1] === gameBoard[4]) && (gameBoard[4] === gameBoard[7]) && gameBoard[1]){
            console.log("A player has won");
            if(gameBoard[0] === 1){
                playerOWins()
            }else{
                playerXWins()
            }
        }else if((gameBoard[2] === gameBoard[5]) && (gameBoard[5] === gameBoard[8]) && gameBoard[2]){
            console.log("A player has won");
            if(gameBoard[0] === 1){
                 playerOWins()
            }else{
                playerXWins()
            }

        }else if((gameBoard[0] === gameBoard[1]) && (gameBoard[1] === gameBoard[2]) && gameBoard[0]){
            console.log("A player has won");
            if(gameBoard[0] === 1){
                 playerOWins()
            }else{
                playerXWins()
            }

        }
        else if((gameBoard[3] === gameBoard[4]) && (gameBoard[4] === gameBoard[5]) && gameBoard[3]){
            console.log("A player has won");
            if(gameBoard[0] === 1){
                 playerOWins()
            }else{
                playerXWins()
            }

        }else if((gameBoard[6] === gameBoard[7]) && (gameBoard[7] === gameBoard[8]) && gameBoard[6]){
            console.log("A player has won");
            if(gameBoard[0] === 1){
                 playerOWins()
            }else{
                playerXWins()
            }

        }else if((gameBoard[0] === gameBoard[4]) && (gameBoard[4] === gameBoard[8]) && gameBoard[0]){
            console.log("A player has won");
            if(gameBoard[0] === 1){
                 playerOWins()
            }else{
                playerXWins()
            }

        }else if((gameBoard[2] === gameBoard[4]) && (gameBoard[4] === gameBoard[6]) && gameBoard[2]){
            console.log("A player has won");
            if(gameBoard[0] === 1){
                playerOWins()
            }else{
                playerXWins()
            }
        }

        console.log(gameBoard.indexOf(0) > -1)
        if(!gameBoard.indexOf(0) > -1){
            playersTie()
        }

    }
    let buttonDiv = document.getElementsByClassName("actions")
    console.log(buttonDiv);
    buttonDiv = buttonDiv[0]
    console.log(buttonDiv.childNodes)
    let newGameButton = buttonDiv.childNodes[1]

    newGameButton.addEventListener('click', (event)=>{
        event.preventDefault()
    })





})
