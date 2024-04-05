document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const size = 4;
  let board = [];
  let pontoAtual = 0;
  const pontoAtualElem = document.getElementById('pontoAtual');
  document.addEventListener('keydown', function(event) {
    //Desabilita a fução que as setas de scroll tem no navegador para uso exclusivo do jogo
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
    }
  });
  

  let highScore = localStorage.getItem('2048-highScore') || 0;
  const highScoreElem = document.getElementById('high-score');
  highScoreElem.textContent = highScore;

  const gameOverElem = document.getElementById('game-over');
 // Atualiza a pontuação atual e a pontuação mais alta.
  function updateScore(value) {
      pontoAtual += value;
      pontoAtualElem.textContent = pontoAtual;
      if (pontoAtual > highScore) {
          highScore = pontoAtual;
          highScoreElem.textContent = highScore;
          localStorage.setItem('2048-highScore', highScore);
      }
  }

//Recomeça o jogo, limpando a pontuação, o tabuleiro e ocultando a mensagem de fim de jogo.
  function reiniciaJogo() {
      pontoAtual = 0;
      pontoAtualElem.textContent = '0';
      gameOverElem.style.display = 'none';
      iniciaJogo();
  }


  //Verifica se o jogador atingiu o objetivo do jogo (criar a peça 2048) e exibe a mensagem de vitória.
  function verificaVitoria() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] === 2048) {
          gameOverElem.textContent = 'You Win!';
          gameOverElem.style.display = 'flex';
        }
      }
    }
  }


  //Inicializa o tabuleiro, preenchendo com zeros e adicionando duas peças iniciais aleatórias.
  function iniciaJogo() {
      board = [...Array(size)].map(e => Array(size).fill(0));
      colocaAleatório();
      colocaAleatório();
      carregaTabela();
  }



  //Atualiza a visualização do tabuleiro no HTML, refletindo os valores atuais das células.
  function carregaTabela() {
      for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
              const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
              const prevValue = cell.dataset.value;
              const currentValue = board[i][j];
              if (currentValue !== 0) {
                  cell.dataset.value = currentValue;
                  cell.textContent = currentValue;

                  if (currentValue !== parseInt(prevValue) && !cell.classList.contains('new-tile')) {
                      cell.classList.add('merged-tile');
                  }
              } else {
                  cell.textContent = '';
                  delete cell.dataset.value;
                  cell.classList.remove('merged-tile', 'new-tile');
              }
          }
      }


      setTimeout(() => {
          const cells = document.querySelectorAll('.grid-cell');
          cells.forEach(cell => {
              cell.classList.remove('merged-tile', 'new-tile');
          });
      }, 300);
  }


  //Adiciona uma peça aleatória (2 ou 4) em uma posição vazia do tabuleiro.
  function colocaAleatório() {
      const a = [];
      for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
              if (board[i][j] === 0) {
                  a.push({ x: i, y: j });
              }
          }
      }

      if (a.length > 0) {
          const randomCell = a[Math.floor(Math.random() * a.length)];
          board[randomCell.x][randomCell.y] = Math.random() < 0.9 ? 2 : 4;
          const cell = document.querySelector(`[data-row="${randomCell.x}"][data-col="${randomCell.y}"]`);
          cell.classList.add('new-tile'); 
      }
  }


  // Realiza o movimento das peças na direção indicada (cima, baixo, esquerda ou direita), combinando peças iguais e adicionando novas peças aleatoriamente.
  function move(direction) {
      let escolhido = false;
      if (direction === 'ArrowUp' || direction === 'ArrowDown') {
          for (let j = 0; j < size; j++) {
              const coluna = [...Array(size)].map((_, i) => board[i][j]);
              const newcoluna = transform(coluna, direction === 'ArrowUp');
              for (let i = 0; i < size; i++) {
                  if (board[i][j] !== newcoluna[i]) {
                      escolhido = true;
                      board[i][j] = newcoluna[i];
                  }
              }
          }
      } else if (direction === 'ArrowLeft' || direction === 'ArrowRight') {
          for (let i = 0; i < size; i++) {
              const row = board[i];
              const newRow = transform(row, direction === 'ArrowLeft');
              if (row.join(',') !== newRow.join(',')) {
                  escolhido = true;
                  board[i] = newRow;
              }
          }
      }
      if (escolhido) {
          colocaAleatório();
          carregaTabela();
          checkGameOver();
      }
  }
  //Transforma uma linha ou coluna, movendo as peças para o início ou fim, combinando peças iguais e atualizando a pontuação.
  function transform(line, moveTowardsStart) {
      let newLine = line.filter(cell => cell !== 0);
      if (!moveTowardsStart) {
          newLine.reverse();
      }
      for (let i = 0; i < newLine.length - 1; i++) {
          if (newLine[i] === newLine[i + 1]) {
              newLine[i] *= 2;
              updateScore(newLine[i]); 
              newLine.splice(i + 1, 1);
          }
      }
      while (newLine.length < size) {
          newLine.push(0);
      }
      if (!moveTowardsStart) {
          newLine.reverse();
      }
      return newLine;
  }

  //Verifica se o jogo acabou (quando não há mais movimentos possíveis), exibindo a mensagem de fim de jogo.
  function checkGameOver() {
      for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
              if (board[i][j] === 0) {
                  return; 
              }
              if (j < size - 1 && board[i][j] === board[i][j + 1]) {
                  return;
              }
              if (i < size - 1 && board[i][j] === board[i + 1][j]) {
                  return;
              }
          }
      }
      gameOverElem.style.display = 'flex';
  }
  //Escuta as teclas pressionadas (setas direcionais) para realizar os movimentos das peças.
  document.addEventListener('keydown', event => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
          move(event.key);
      }
  });
  // no botão de reiniciar: Reinicia o jogo.
  document.getElementById('restart-btn').addEventListener('click', reiniciaJogo);
  iniciaJogo();
});