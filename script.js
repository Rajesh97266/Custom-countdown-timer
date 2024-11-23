const countdownForm = document.getElementById("countdownForm");
const inputContainer = document.getElementById("input-container");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

const completeEl = document.getElementById("complete");
const completeElInfo = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-button");

let countdownTitle = "";
let countdownDate = "";

const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

//Take values from form
function updateForm(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(e);
  console.log(countdownTitle);
  console.log(countdownDate);
}

//Event Listener
countdownForm.addEventListener("submit", updateForm);
