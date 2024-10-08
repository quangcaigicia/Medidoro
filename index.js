const startEL = document.getElementById("start");
const stopEL = document.getElementById("stop");
const resetEL = document.getElementById("reset");
const timerEL = document.getElementById("timer");

let interval;
let timeLeft = 1500;
const audio = new Audio("./audio/level-up-2-199574.mp3");

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
    if (timeLeft < 0) {
      clearInterval(interval);
      audio.play();
      alert("Time's up!");
      timeLeft = 0; // Reset the time
      updateTimer(); // Make sure the time appear as 00:00
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

startEL.addEventListener("click", startTimer);
stopEL.addEventListener("click", stopTimer);
resetEL.addEventListener("click", resetTimer);
