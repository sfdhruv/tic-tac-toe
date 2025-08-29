let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-game");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame=()=>{
    turn0=true
    enablebox()
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked");
    if (turn0) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    turn0 = !turn0;
    box.disabled = true;
    checkWinner();
  });
});
const disablebtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText=""
  }
};
const showWinner = (winner) => {
  msg.innerText = `winner ${winner}`;
  disablebtn();
  msgContainer.classList.remove("hide");
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;
    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        console.log("winner", posval1);
        showWinner(posval1);
      }
    }
  }
};
newGame.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)