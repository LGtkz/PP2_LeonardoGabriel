document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const tam = 4;
  let board = []
  let pontos = 0
  const contaPontos = document.getElementById('pontosAtuais');

  let recordePontos = localStorage.getItem('2048') || 0;
  const recordeItem = document.getElementById('Recorde');
  contaPontos.textContent = recordePontos;

  const gameOverElemento = document.getElementById('gameOver');

  function atualizaPontos(value){
    pontos += value
    contaPontos.textContent = pontos;
    if(pontos > recordePontos){
      recordePontos = pontos;
      recordeItem.textContent = recordePontos;
      localStorage.setItem('2048')
    }
  }

  function resetaJogo(){
    pontos = 0;
    contaPontos.textContent = '0';
    gameOverElemento.style.display = 'none'
    iniciaJogo();
  }

  function iniciaJogo(){
    board = [...Array(size).map(e => Array(size).fill(0))]
    colocaAleatorio();
    colocaAleatorio();
    carregaTabela();
  }

  function carregaTabela(){
    for(let i = 0; i < size; i++){
      for(let j = 0; j < size; j++){
        const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
        const valorAnterior = cell.dataset.value;
        const valorAtual = board[i][j];
        if(currentValue !== 0){
          cell.dataset.value = valorAtual;
          cell.textContent = valorAtual;

          if(valorAtual !== parseInt(valorAnterior) && !cell.classList.contains('new-tile')){
            cell.classList.add('merged-tile');
          }
          else{
            delete cell.dataset.value;
            cell.classList.remove('merged-tile', 'new-tile');

          }
        }
      }
    }
    setTimeout(() => {
      
    })
  }
})