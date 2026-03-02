function openProject(name) {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("projectArea").classList.remove("hidden");

  let content = "";

  if (name === "flames") {
    content = `
      <h2>🔥 FLAMES</h2>
      <input id="f1" placeholder="First Name">
      <input id="f2" placeholder="Second Name">
      <button onclick="runFlames()">Check</button>
      <h3 id="fresult"></h3>
    `;
  }

  if (name === "love") {
    content = `
      <h2>❤️ Love Calculator</h2>
      <input id="l1" placeholder="First Name">
      <input id="l2" placeholder="Second Name">
      <button onclick="calcLove()">Calculate</button>
      <h3 id="lresult"></h3>
    `;
  }

  if (name === "color") {
    content = `
      <h2>🎨 Random Color Generator</h2>
      <button onclick="changeColor()">Generate</button>
      <h3 id="colorCode"></h3>
    `;
  }

  if (name === "rps") {
    content = `
      <h2>✊ Rock Paper Scissors</h2>
      <button onclick="playRPS('Rock')">Rock</button>
      <button onclick="playRPS('Paper')">Paper</button>
      <button onclick="playRPS('Scissors')">Scissors</button>
      <h3 id="rpsResult"></h3>
    `;
  }

  if (name === "todo") {
    content = `
      <h2>📝 To-Do App</h2>
      <input id="task" placeholder="New Task">
      <button onclick="addTask()">Add</button>
      <ul id="taskList"></ul>
    `;
  }

  if (name === "dice") {
    content = `
      <h2>🎲 Dice Roller</h2>
      <button onclick="rollDice()">Roll Dice</button>
      <h3 id="diceResult"></h3>
    `;
  }

  document.getElementById("projectContent").innerHTML = content;
}

function goHome() {
  document.getElementById("projectArea").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

/* FLAMES */
function runFlames() {
  let n1 = document.getElementById("f1").value;
  let n2 = document.getElementById("f2").value;
  let results = ["Friends 🤝","Love ❤️","Affection 😊","Marriage 💍","Enemies 😡","Siblings 👨‍👩‍👧"];
  let index = (n1.length + n2.length) % 6;
  document.getElementById("fresult").innerText = results[index];
}

/* Love Calculator */
function calcLove() {
  let percent = Math.floor(Math.random()*101);
  document.getElementById("lresult").innerText = percent + "% Compatible ❤️";
}

/* Color Generator */
function changeColor() {
  let color = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = color;
  document.getElementById("colorCode").innerText = color;
}

/* RPS */
function playRPS(user) {
  let choices = ["Rock","Paper","Scissors"];
  let comp = choices[Math.floor(Math.random()*3)];
  document.getElementById("rpsResult").innerText =
    "You: " + user + " | Computer: " + comp;
}

/* To-Do */
function addTask() {
  let task = document.getElementById("task").value;
  if(task==="") return;
  let li = document.createElement("li");
  li.innerText = task;
  document.getElementById("taskList").appendChild(li);
}

/* Dice */
function rollDice() {
  let num = Math.floor(Math.random()*6)+1;
  document.getElementById("diceResult").innerText = "You rolled: " + num;
}
