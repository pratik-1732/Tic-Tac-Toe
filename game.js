let boxes = document.querySelectorAll(".box");
let game = document.querySelector(".game");
let player = document.querySelector(".player");
let result = document.querySelector(".result");
let resetBtn = document.querySelector(".reset-btn");

let turnX = true;

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clickled");
    console.log(box.classList);
    playClickSound();
    if (turnX) {
      box.innerHTML = "X";
      box.classList.add("cross");
      box.classList.remove("dot");
      turnX = false;
    } else {
      box.innerHTML = "O";
      box.classList.add("dot");
      box.classList.remove("cross");
      turnX = true;
    }
    box.disabled = true;
    setTimeout(() => {
      checkWinner();
    }, 2000);
  });
});

const checkWinner = () => {
  for (pattern of winPattern) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        game.classList.add("box-hidden");
        result.classList.add("show-res");
        player.innerHTML = posVal1;
        console.log("winner", posVal1);
      }
    }
  }
};

resetBtn.addEventListener("click", () => {
  result.classList.remove("show-res");
  game.classList.remove("box-hidden");
  turnX = true;
  boxes.forEach((box) => {
    box.textContent = "";
  });
});

function playClickSound() {
  var clickSound = document.getElementById("clickSound");
  clickSound.play();
}
