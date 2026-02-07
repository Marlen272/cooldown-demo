let state = "screen1";

const startBtn = document.getElementById("startBtn");
const actionBtn = document.getElementById("actionBtn");
const timerText = document.getElementById("timer");

startBtn.onclick = () => {
  setState("screen2");
  startTimer(10);
};

function setState(newState) {
  state = newState;
  document.getElementById("screen1").classList.toggle("hidden", state !== "screen1");
  document.getElementById("screen2").classList.toggle("hidden", state !== "screen2");
}

function startTimer(seconds) {
  let time = seconds;
  const interval = setInterval(() => {
    time--;
    timerText.textContent = time;
    if (time <= 0) {
      clearInterval(interval);
      actionBtn.disabled = false;
    }
  }, 1000);
}

actionBtn.onclick = () => {
  alert("Action logged!");
};
