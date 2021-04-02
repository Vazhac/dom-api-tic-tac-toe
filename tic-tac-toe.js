//3 squares in a row, vertical, horizontal, diagonal.
//if the click count is odd x
//if the click coutn is even o

//get id of the square of the id we click on
//hold the value

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tic-tac-toe')

    document.addEventListener("click", (event1) => {
    const targetID = event1.target.id;
    let currentPlayer = 'X';
    let gameState = ["", "", "", "", "", "", "", "", "",]
    // const newGame

    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [2, 5, 8],
        [0, 3, 6], [0, 4, 8], [2, 4, 6], [1, 4, 7]
    ]

        if ()

    function restartGame() {
        currentPlayer = "X";
        gameState = [];

    }
    //eventListener listens for click on a square
    //add a counter for each successful click.
    //if odd num of clicks; add inputs to player x array;
    //if even num of clicks; add inputs to player y array;
    //if no winners are chosen under 10 clicks, then the result is a draw;
    })
})
