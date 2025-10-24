//Botão Menu
document.getElementById("voltar").addEventListener("click", () => {
  window.location.href = "../../../index.html";
});

const balls = {
  B: Array.from({ length: 15 }, (_, i) => i + 1),
  I: Array.from({ length: 15 }, (_, i) => i + 16),
  N: Array.from({ length: 15 }, (_, i) => i + 31),
  G: Array.from({ length: 15 }, (_, i) => i + 46),
  O: Array.from({ length: 15 }, (_, i) => i + 61),
};

const columnsDrawn = { B: [], I: [], N: [], G: [], O: [] };

const drawnOrder = [];

const bolaDiv = document.getElementById("bola");
const ultimosDiv = document.getElementById("ultimos");
const sortearBtn = document.getElementById("sortear");
const leftDiv = document.getElementById("left");
const remainingH4 = document.querySelector("#title h4");

function saveGameState() {
  localStorage.setItem("ballsAvailable", JSON.stringify(balls));
  localStorage.setItem("drawnOrder", JSON.stringify(drawnOrder));
}

function restart() {
  if (confirm("Resetar Partida?")) {
    localStorage.removeItem("ballsAvailable");
    localStorage.removeItem("drawnOrder");
    location.reload();
  }
}

function loadGameState() {
  const savedBalls = localStorage.getItem("ballsAvailable");
  const savedDrawnOrder = localStorage.getItem("drawnOrder");

  if (savedBalls) {
    Object.keys(balls).forEach((col) => {
      balls[col] = JSON.parse(savedBalls)[col];
    });
  }

  if (savedDrawnOrder) {
    drawnOrder.push(...JSON.parse(savedDrawnOrder));

    drawnOrder.forEach(({ col, num }) => {
      columnsDrawn[col].push(num);
    });

    updateCard();
    updateHistory();
    updateRemaining();
  } else {
    updateRemaining();
  }
}

function drawRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr.splice(index, 1)[0];
}

function drawBall() {
  const availableCols = Object.keys(balls).filter((c) => balls[c].length > 0);
  if (availableCols.length === 0) return null;

  const col = drawRandom(availableCols);
  const num = drawRandom(balls[col]);

  columnsDrawn[col].push(num);
  drawnOrder.push({ col, num });

  saveGameState();

  return { col, num };
}

function updateCard() {
  Object.keys(columnsDrawn).forEach((col) => {
    columnsDrawn[col].sort((a, b) => a - b);
  });

  leftDiv.innerHTML = "<h3>Números já sorteados</h3>";

  const header = ["B", "I", "N", "G", "O"];
  const tableDiv = document.createElement("div");
  tableDiv.classList.add("tabela-bingo");

  header.forEach((col) => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("coluna-bingo");

    const title = document.createElement("H2");
    title.textContent = col;
    colDiv.appendChild(title);

    columnsDrawn[col].forEach((num) => {
      const numDiv = document.createElement("div");
      numDiv.textContent = num;
      numDiv.classList.add("numero-bingo");
      colDiv.appendChild(numDiv);
    });

    tableDiv.appendChild(colDiv);
  });

  leftDiv.appendChild(tableDiv);
}

function updateHistory() {
  ultimosDiv.innerHTML = "<h3>Últimos Sorteados</h3>";

  const lastTwoDrawn = drawnOrder.slice(-2).reverse();

  lastTwoDrawn.forEach((drawn) => {
    const div = document.createElement("div");
    div.textContent = `${drawn.col}-${drawn.num}`;
    div.classList.add("numero-bingo-ultimos");
    ultimosDiv.appendChild(div);
  });
}

function updateRemaining() {
  const remaining = 75 - drawnOrder.length;
  remainingH4.textContent = `${remaining} números restantes`;
}

sortearBtn.addEventListener("click", async () => {
  const availableCols = Object.keys(balls).filter((c) => balls[c].length > 0);
  if (availableCols.length === 0) {
    if (confirm("Todas as bolas foram sorteadas!\nDeseja reiniciar o jogo?")) {
      localStorage.removeItem("ballsAvailable");
      localStorage.removeItem("drawnOrder");
      location.reload();
    }
    return;
  }

  bolaDiv.classList.add("animando");

  await new Promise((resolve) => {
    let tempo = 0;
    const interval = setInterval(() => {
      const col =
        availableCols[Math.floor(Math.random() * availableCols.length)];
      const num = Math.floor(Math.random() * 75) + 1;
      bolaDiv.textContent = `${col}-${num}`;
      tempo += 100;
      if (tempo > 2000) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });

  bolaDiv.classList.remove("animando");

  const result = drawBall();
  if (!result) return;

  bolaDiv.textContent = `${result.col}-${result.num}`;

  updateCard();
  updateHistory();
  updateRemaining();
});

window.onload = loadGameState;
