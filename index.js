
console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");
let audioTurn = new Audio("turn audio.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    // Horizontal lines
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 13, 0],
    [6, 7, 8, -1, 22, 0],
    // Vertical lines
    [0, 3, 6, -11, 14, 90],
    [1, 4, 7, -2, 14, 90],
    [2, 5, 8, 8, 14, 90],
    // Diagonal lines
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, -3, 15, 135]
  ];

  wins.forEach((e) => {
    // Check if all 3 boxes in a winning combination have the same text and aren't empty
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      gameover.play();
      document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
      isgameover = true;
      
      // Show the winning image
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
      
      // Display the winning line (use correct transformation for positioning)
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "30vw"; // Adjust this value for line length
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && !isgameover) {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
});




