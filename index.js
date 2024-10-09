const startEL = document.getElementById("start");
const stopEL = document.getElementById("stop");
const resetEL = document.getElementById("reset");
const timerEL = document.getElementById("timer");
const breakEL = document.getElementById("break");

let interval;
let timeLeft = 2;
const audio = new Audio("./audio/level-up-2-199574.mp3");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEL.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      delay(1000).then(() => {
        console.log("Time's up!");
        audio.play();
        alert("Time's up!");
        timeLeft = 1500;
        updateTimer();
      });
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

function breakTimer() {
  clearInterval(interval);
  timeLeft = 300;
  updateTimer();
}

startEL.addEventListener("click", startTimer);
stopEL.addEventListener("click", stopTimer);
resetEL.addEventListener("click", resetTimer);
breakEL.addEventListener("click", breakTimer);
