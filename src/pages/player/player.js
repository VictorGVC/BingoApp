
function generateBingoCard() {
  const card = {
    B: [],
    I: [],
    N: [],
    G: [],
    O: [],
    marked: Array(5).fill().map(() => Array(5).fill(false))
  };

  const ranges = {
    B: { min: 1, max: 15 },
    I: { min: 16, max: 30 },
    N: { min: 31, max: 45 },
    G: { min: 46, max: 60 },
    O: { min: 61, max: 75 }
  };

  for (const [letter, range] of Object.entries(ranges)) {
    const possibleNumbers = [];
    for (let i = range.min; i <= range.max; i++) {
      possibleNumbers.push(i);
    }
    
    for (let i = possibleNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [possibleNumbers[i], possibleNumbers[j]] = [possibleNumbers[j], possibleNumbers[i]];
    }
    
    card[letter] = possibleNumbers.slice(0, 5);
  }

  return card;
}

function saveBingoCard(card) {
  localStorage.setItem('bingoCard', JSON.stringify(card));
}

function loadBingoCard() {
  const savedCard = localStorage.getItem('bingoCard');
  return savedCard ? JSON.parse(savedCard) : null;
}

function populateBingoCard(card) {
  const numContainers = document.querySelectorAll('.container-num-boxes');
  const letters = ['B', 'I', 'N', 'G', 'O'];
  
  document.querySelectorAll('.num-box').forEach(box => {
    const newBox = box.cloneNode(true);
    box.parentNode.replaceChild(newBox, box);
  });
  
  for (let row = 0; row < 5; row++) {
    const rowContainer = numContainers[row];
    const numBoxes = Array.from(rowContainer.children);
    
    letters.forEach((letter, col) => {
      const box = numBoxes[col];
      
      if (!box.classList.contains('num-box')) {
        return;
      }
      
      const number = card[letter][row];
      box.textContent = number;
      
      if (!card.marked) {
        card.marked = Array(5).fill().map(() => Array(5).fill(false));
      }
      
      if (card.marked[row] && card.marked[row][col]) {
        box.classList.add('marked');
      } else {
        box.classList.remove('marked');
      }
      
      box.addEventListener('click', function() {
        if (!card.marked) return;
        
        card.marked[row][col] = !card.marked[row][col];
        
        if (card.marked[row][col]) {
          this.classList.add('marked');
        } else {
          this.classList.remove('marked');
        }
        saveBingoCard(card);
      });
    });
  }
}

function resetBingoCard() {
  localStorage.removeItem('bingoCard');
  const newCard = generateBingoCard();
  saveBingoCard(newCard);
  populateBingoCard(newCard);
}

document.addEventListener("DOMContentLoaded", function () {
  let card = loadBingoCard() || generateBingoCard();
  saveBingoCard(card);
  populateBingoCard(card);
  
  const resetButton = document.getElementById('resetButton');
  if (resetButton) {
    resetButton.addEventListener('click', function() {
      if (confirm('Tem certeza que quer resetar a cartela?')) {
        resetBingoCard();
      }
    });
  }
});
