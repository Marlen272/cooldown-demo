const askBtn = document.getElementById("askBtn");
const result = document.getElementById("result");

let clicks = JSON.parse(localStorage.getItem("clicks")) || [];

askBtn.onclick = () => {
  const now = Date.now();

  clicks = clicks.filter(time => now - time < 3600000);

  if (clicks.length >= 3) {
    result.textContent = "Limit reached. Try later.";
    return;
  }

  clicks.push(now);
  localStorage.setItem("clicks", JSON.stringify(clicks));

  const success = Math.random() < 0.2;
  result.textContent = success ? "Success!" : "Failed!";
};
