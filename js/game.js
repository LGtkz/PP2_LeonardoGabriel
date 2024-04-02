var canvas;
var context;

var comidaPosicao = [
    Math.floor(Math.random()*100) * 10,
    Math.floor(Math.random()*60) * 10
]

var PosCobra = [100, 50]
var corpoCobra = [[100, 50], [90, 50], [80, 50]]
var dir = "ArrowRight"
var velocidade;
var block = 10
var over = false
var pontos = 0
var frames = 100/30

window.onload = () => {
    canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')
    setInterval(() => {
        desenha();
        cobraAnimacao();
        Come();
    }, frames)
    document.addEventListener('keydown', dir, false)
    document.addEventListener('mousedown', () => {
        if(over){
            reiniciaJogo();
        }
    })
}

function desenha(){
    //Fundo do jogo
    retangulo(0,0, canvas.width, canvas.height, 'rgb(40, 40, 40)')

    //comida
    retangulo(comidaPosicao[0], comidaPosicao[1], block, block, 'rgb(0,255,0)')

    corpoCobra.splice(0, 0, [PosCobra[0], PosCobra[1]])
    for(var i = 0; i < corpoCobra.length; i++){
        var corpo = corpoCobra[i];
        retangulo(corpo[0], corpo[1], block, block, 'rgb(0, 255, 0)')
    }

    context.font = "25px sans-serif"

    context.fillText("Score: ", score, 20, 30);

    if(over){
        displayMessage("Game over")
    }
}

function direcaoCobra(event){
    console.log(corpoCobra);
    changeTo = event.key
    console.log("Direção: ", dir);
    console.log("Escolha para: ", changeTo);
    switch (changeTo){
        case "ArrowDown":
            if(dir != "ArrowUp"){
                dir = "ArrowDown"
            }
            break;
        case "ArrowUp":
            if(dir != "ArrowDown"){
                dir = "ArrowUp"
            }
            break;
        case "ArrowLeft":
            if(dir != "ArrowRight"){
                dir = "ArrowLeft"
            }
            break;
        case "ArrowRight":
            if(dir!= "ArrowLeft"){
                dir = "ArrowRight"
            }
            break;
    }
}