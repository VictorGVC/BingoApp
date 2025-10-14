// todas as bolas
const balls = {
  B: Array.from({length: 15}, (_, i) => i + 1),
  I: Array.from({length: 15}, (_, i) => i + 16),
  N: Array.from({length: 15}, (_, i) => i + 31),
  G: Array.from({length: 15}, (_, i) => i + 46),
  O: Array.from({length: 15}, (_, i) => i + 61)
};
//tabela de sorteadas
const columnsDrawn = { B: [], I: [], N: [], G: [], O: [] };
//ordem das bolas
const drawnOrder = [];

const bolaDiv = document.getElementById('bola');
const ultimosDiv = document.getElementById('ultimos');
const sortearBtn = document.getElementById('sortear');
const leftDiv = document.getElementById('left');
const remainingH4 = document.querySelector('#title h4');

// remover bola do total
function drawRandom(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr.splice(index, 1)[0];
}

// Sorteio de bola
function drawBall() {
  const availableCols = Object.keys(balls).filter(c => balls[c].length > 0);
  if (availableCols.length === 0) return null;

  const col = drawRandom(availableCols);
  const num = drawRandom(balls[col]);

  columnsDrawn[col].push(num);
  drawnOrder.push({col, num});

  return {col, num};
}

// Atualiza a cartela  (colunas independentes)
function updateCard() {
  leftDiv.innerHTML = '<h3><b>Números já Sorteados</b></h3>';
  const header = ['B','I','N','G','O'];
  const tableDiv = document.createElement('div');
  tableDiv.style.display = 'flex';
  tableDiv.style.gap = '10px';


  header.forEach(col => {
    const colDiv = document.createElement('div');
    colDiv.style.display = 'flex';
    colDiv.style.flexDirection = 'column';
    colDiv.style.alignItems = 'center';
    const title = document.createElement('b');
    title.textContent = col;
    colDiv.appendChild(title);

    columnsDrawn[col].forEach(num => {
      const numDiv = document.createElement('div');
      numDiv.textContent = num;
      colDiv.appendChild(numDiv);
    });

    tableDiv.appendChild(colDiv);
  });

  leftDiv.appendChild(tableDiv);
}

// Atualiza histórico lateral
function updateHistory() {
  ultimosDiv.innerHTML = '<h3><b>Últimos Sorteados</b></h3>';
  Object.keys(columnsDrawn).forEach(col => {
    if (columnsDrawn[col].length > 0) {
      const p = document.createElement('p');
      p.textContent = `${col}: ${columnsDrawn[col].join(', ')}`;
      ultimosDiv.appendChild(p);
    }
  });
}

// Atualiza contagem de números restantes
function updateRemaining() {
  const remaining = 75 - drawnOrder.length;
  remainingH4.textContent = `${remaining} números restantes`;
}

// Evento de clique no botão sortear
sortearBtn.addEventListener('click', () => {
  const result = drawBall();
  if (!result) {
    alert('Todas as 75 bolas já foram sorteadas!');
    return;
  }

  // Atualiza último número
  bolaDiv.textContent = `${result.col}-${result.num}`;

  // Atualiza cartela, histórico e contagem
  updateCard();
  updateHistory();
  updateRemaining();
});

