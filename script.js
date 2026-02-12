// Quotes
const quotes = [
  "Believe in yourself!",
  "You are stronger than you think.",
  "Every day is a new beginning.",
  "Push yourself, because no one else will.",
  "Dream big and dare to fail."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

// To-Do List
function addTask() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.innerText = task;
    li.onclick = () => li.remove(); // click to remove task
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }
}

// Clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
