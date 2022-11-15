// Look for anything with a class of square and sotring it in squares variable
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

// initialising result as 0
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

// everytime run function, returning random squares and changing where mole class is.
function randomSquare() {
  // for each square in our squares array, removing the class of mole.
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  // going into squares array and passing through random number from 0-8 (9 squares)
  // times by 9 as 9 squares we want to change range, then rounding it down with math floor.
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  // saving id of randomSquare to this variable
  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  // null timer only added incase we want to stop a mole with our button if we wish
  //   let timerId = null;
  // random square function will run every 500ms when moveMole function invoked.
  timerId = setInterval(randomSquare, 500);
}
moveMole();

function countDown() {
  //getting current time and above of 60 and tkaing 1 from it. Counting down.
  currentTime--;
  timeLeft.textContent = currentTime;
  // if countdown finished clear timer
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    alert("Game Over! Your score is: " + result);
  }
}

// for stopping timer, want countDown function to invoke every second.
let countDownTimerId = setInterval(countDown, 1000);
