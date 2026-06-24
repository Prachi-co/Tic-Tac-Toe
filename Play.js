const Player1Food =
localStorage.getItem("Player1Food") || "🍕";

const Player2Food =
localStorage.getItem("Player2Food") || "🧁";

const cells = document.querySelectorAll(".cell");

const turnText =
document.querySelector(".turn");

let currentPlayer = Player1Food;

turnText.textContent = "Player 1's Turn" ;

const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]
];

cells.forEach(cell => {

cell.addEventListener("click", () => {

if(cell.textContent !== ""){
return;
}

cell.textContent = currentPlayer;

if(checkWinner()){
return;
}

if(checkDraw()){
return;
}

if(currentPlayer === Player1Food){

currentPlayer = Player2Food;
turnText.textContent = "Player 2's Turn";

}
else{

currentPlayer = Player1Food;
turnText.textContent = "Player 1's Turn";

}

});

});

function checkWinner(){

for(let pattern of winPatterns){

let a = cells[pattern[0]].textContent;
let b = cells[pattern[1]].textContent;
let c = cells[pattern[2]].textContent;

if(a !== "" && a === b && b === c){

let winner =
(a === Player1Food)
? "player1"
: "player2";

showWinnerPopup(winner);

cells.forEach(cell=>{
cell.style.pointerEvents="none";
});

return true;

}

}

return false;

}

function checkDraw(){

let draw = [...cells].every(
cell => cell.textContent !== ""
);

if(draw){

showWinnerPopup("draw");

cells.forEach(cell=>{
cell.style.pointerEvents="none";
});

return true;
}

return false;
}

function showWinnerPopup(result){

const popup =
document.getElementById("winnerPopup");

const winnerMessage =
document.getElementById("winnerMessage");

const loserMessage =
document.getElementById("loserMessage");

const emoji = document.querySelector(".trophy");


if(result === "player1"){

    emoji.textContent = "🏆";

    winnerMessage.textContent = "PLAYER 1 WINS!";

    loserMessage.textContent = "😢 Player 2 Lost";

}

else if(result === "player2"){

    emoji.textContent = "🏆";

    winnerMessage.textContent = "PLAYER 2 WINS!";

    loserMessage.textContent = "😢 Player 1 Lost";

}

else{

    emoji.textContent = "🤝"; 

    winnerMessage.textContent = "MATCH DRAW";

    loserMessage.textContent = "😔 Nobody Wins";

}

popup.style.display = "flex";

}

document
.getElementById("restartGame")
.addEventListener("click",()=>{

document.getElementById(
"winnerPopup"
).style.display = "none";

cells.forEach(cell=>{

cell.textContent="";
cell.style.pointerEvents="auto";

});

currentPlayer = Player1Food;

turnText.textContent =
"Player 1's Turn";

});

document
.getElementById("homeBtn")
.addEventListener("click",()=>{

localStorage.clear();

window.location.href =
"index.html";

});