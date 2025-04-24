let count = 0;
const countDisplay = document.getElementById('count');

function changeCount(amount) {
  count += amount;
  updateDisplay();
}

function resetCount() {
  count = 0;
  updateDisplay();
}

function updateDisplay() {
  countDisplay.textContent = count;
}