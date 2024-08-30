let scoreNum = document.querySelector("#scoreNum");
let buttons = document.querySelectorAll("#triangle .btn");
let selectedBtn;
let randomBtn;

if (sessionStorage.getItem("scoreNum") === null) {
  sessionStorage.setItem("scoreNum", scoreNum.textContent);
} else {
  scoreNum.textContent = sessionStorage.getItem("scoreNum");
}


// When click on paper, rock and scissors buttons 
buttons.forEach(ele => {
  ele.onclick = () => {
    selectedBtn = document.createElement("button");
    selectedBtn.id = ele.id;
    selectedBtn.className = "position-relative btn btn-icon rounded-circle bg-white";
    checkTypeOfBtn(selectedBtn);
    randomBtn = document.createElement("button");
    randomBtn.id = buttons[Math.floor(Math.random() * buttons.length)].id;
    randomBtn.className = "position-relative btn btn-icon rounded-circle bg-white";
    checkTypeOfBtn(randomBtn);
    document.querySelector("#triangle").classList.add("hide");
    document.querySelector("#challenge").classList.remove("hide");
    document.querySelector(".youPicked div").appendChild(selectedBtn);
    setTimeout(() => {
      document.querySelector(".housePicked div").appendChild(randomBtn);
      document.querySelector(".result").classList.remove("hide");
      checkWinOrLose();
      scoreNum.textContent = sessionStorage.getItem("scoreNum");
    }, 1000);
  }
})

// Check if your are win, lose or draw
function checkWinOrLose() {
  if (selectedBtn.id === 'paperBtn' && randomBtn.id === 'rockBtn') {
    document.querySelector("#winOrLose").textContent = "You Win";
    scoreNum.textContent = +scoreNum.textContent + 1;
    sessionStorage.setItem("scoreNum", scoreNum.textContent);
  } else if (selectedBtn.id === 'scissorsBtn' && randomBtn.id === 'paperBtn') {
    document.querySelector("#winOrLose").textContent = "You Win";
    scoreNum.textContent = +scoreNum.textContent + 1;
    sessionStorage.setItem("scoreNum", scoreNum.textContent);
  } else if (selectedBtn.id === 'rockBtn' && randomBtn.id === 'scissorsBtn') {
    document.querySelector("#winOrLose").textContent = "You Win";
    scoreNum.textContent = +scoreNum.textContent + 1;
    sessionStorage.setItem("scoreNum", scoreNum.textContent);
  } else if (selectedBtn.id === 'rockBtn' && randomBtn.id === 'paperBtn') {
    document.querySelector("#winOrLose").textContent = "You Lose";
    scoreNum.textContent = +scoreNum.textContent - 1;
    sessionStorage.setItem("scoreNum", scoreNum.textContent);
  } else if (selectedBtn.id === 'paperBtn' && randomBtn.id === 'scissorsBtn') {
    document.querySelector("#winOrLose").textContent = "You Lose";
    scoreNum.textContent = +scoreNum.textContent - 1;
    sessionStorage.setItem("scoreNum", scoreNum.textContent);
  } else if (selectedBtn.id === 'scissorsBtn' && randomBtn.id === 'rockBtn') {
    document.querySelector("#winOrLose").textContent = "You Lose";
    scoreNum.textContent = +scoreNum.textContent - 1;
    sessionStorage.setItem("scoreNum", scoreNum.textContent);
  } else {
    document.querySelector("#winOrLose").textContent = "Draw";
  }
}

// Check from the id of selected and random button to append image
function checkTypeOfBtn(button) {
  if (button.id === "paperBtn") {
    button.innerHTML = `<img src="images/icon-paper.svg" alt="Paper">`;
  } else if (button.id === "scissorsBtn") {
    button.innerHTML = `<img src="images/icon-scissors.svg" alt="Scissors">`;
  } else {
    button.innerHTML = `<img src="images/icon-rock.svg" alt="Rock">`;
  }
}

// Click on play again button
document.querySelector("#playAgain").onclick = () => {
  document.querySelector(".youPicked div").removeChild(selectedBtn);
  document.querySelector(".housePicked div").removeChild(randomBtn);
  document.querySelector("#triangle").classList.remove("hide");
  document.querySelector("#challenge").classList.add("hide");
  document.querySelector("#winOrLose").textContent = "";
}
