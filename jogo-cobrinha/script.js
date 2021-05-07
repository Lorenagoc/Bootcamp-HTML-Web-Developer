let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o desenho que vai acontecer dentro do canvas
let box = 32;
let snake = []; //a cobrinha sera um array
snake[0] = { //tamanho inicial
    x: 8 * box,
    y: 8 * box
}
function criarBG() {
    context.fillStyle = "lightgreen"; //cor do background do canvas
    context.fillRect(0, 0, 16 * box, 16 * box); //vai desenhar o quadrado
}

function criarCobrinha() {
    for (var i = 0; i < snake.length; i++) {
        context.fillStyle = "green"; //cor da cobra
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();