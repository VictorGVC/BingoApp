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

// Função para salvar o estado no localStorage
function saveGameState() {
  localStorage.setItem('ballsAvailable', JSON.stringify(balls));
  localStorage.setItem('drawnOrder', JSON.stringify(drawnOrder));
}

function restart(){
  if (confirm('Resetar Partida?')){

    localStorage.removeItem('ballsAvailable');
    localStorage.removeItem('drawnOrder');
    location.reload()
  }
  
}

// Função para carregar o estado do localStorage
function loadGameState() {
  const savedBalls = localStorage.getItem('ballsAvailable');
  const savedDrawnOrder = localStorage.getItem('drawnOrder');

  if (savedBalls) {
    // Carrega as bolas disponíveis
    Object.keys(balls).forEach(col => {
      balls[col] = JSON.parse(savedBalls)[col];
    });
  }

  if (savedDrawnOrder) {
    // Carrega as bolas já sorteadas
    drawnOrder.push(...JSON.parse(savedDrawnOrder));

    // Reconstruir columnsDrawn com base no histórico salvo
    drawnOrder.forEach(({col, num}) => {
      columnsDrawn[col].push(num);
    });

    // Atualizar tela logo ao carregar
    updateCard();
    updateHistory();
    updateRemaining();
  } else {
    updateRemaining(); // Mesmo sem histórico, já mostrar "75 números restantes"
  }
}

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

  // Salva o estado após cada sorteio
  saveGameState();

  return {col, num};
}

// Atualiza a cartela  (colunas independentes)
function updateCard() {
  // Ordenar os números antes de renderizar
  Object.keys(columnsDrawn).forEach(col => {
    columnsDrawn[col].sort((a, b) => a - b);
  });

  leftDiv.innerHTML = '<h3><b>Números já Sorteados</b></h3>';
  const header = ['B','I','N','G','O'];
  const tableDiv = document.createElement('div');
  tableDiv.style.display = 'flex';
  tableDiv.style.lineHeight = '22px'
  tableDiv.style.backgroundColor = 'var(--color-neutral-800)'
  tableDiv.style.justifyItems = 'center'
  tableDiv.style.width = '90%'
  tableDiv.style.height = '85%'
  tableDiv.style.borderRadius = 'var(--border-radius-big)'

  header.forEach(col => {
    const colDiv = document.createElement('div');
    colDiv.style.lineHeight = '22px'
    colDiv.style.width = '100px'
    colDiv.style.color ='var(--color-orange-600)'
    colDiv.style.display = 'flex';
    colDiv.style.flexDirection = 'column';
    colDiv.style.alignItems = 'center';
    const title = document.createElement('b');
    title.textContent = col;
    colDiv.appendChild(title);

    columnsDrawn[col].forEach(num => {
      const numDiv = document.createElement('div');
      numDiv.textContent = num;
      numDiv.style.border = "1px solid var(--color-neutral-600)"
      numDiv.style.borderRadius = 'var(--border-radius-medium)'
      numDiv.style.width = '90px'
      numDiv.style.blockSize = 'border-box'
      numDiv.style.marginLeft = '9px'
      numDiv.style.textAlign = "center"
      numDiv.style.color = 'var(--color-purple-500)'
      numDiv.style.backgroundColor ="var(--color-neutral-950)"
      colDiv.appendChild(numDiv);
    });
    
    tableDiv.appendChild(colDiv);
  });
  
  leftDiv.appendChild(tableDiv);
  
}

// Atualiza histórico lateral
function updateHistory() {
  ultimosDiv.innerHTML = '<h3><b>Últimos Sorteados</b></h3>';

  // Pega os últimos dois números sorteados do array drawnOrder
  const lastTwoDrawn = drawnOrder.slice(-2).reverse();

  // Itera sobre os últimos dois sorteios
  lastTwoDrawn.forEach(drawn => {
    const p = document.createElement('p');
    p.textContent = `${drawn.col}: ${drawn.num}`;
    ultimosDiv.appendChild(p);
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
    //  Quando acabar as bolas, limpar tudo e reiniciar automaticamente
    if (confirm('Todas as bolas foram sorteadas!\nDeseja reiniciar o jogo?')) {
      localStorage.removeItem('ballsAvailable');
      localStorage.removeItem('drawnOrder');
      location.reload(); // Recarrega a página
    }
    return;
  }



  // Atualiza último número
  bolaDiv.textContent = `${result.col}-${result.num}`;

  // Atualiza cartela, histórico e contagem
  updateCard();
  updateHistory();
  updateRemaining();
});

// Chame loadGameState ao carregar a página
window.onload = loadGameState;
