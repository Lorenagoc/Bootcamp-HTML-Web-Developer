let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o desenho que vai acontecer dentro do canvas
let box = 32;
let snake = []; //a cobrinha sera um array
snake[0] = { //tamanho inicial
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG() {
    context.fillStyle = "lightgreen"; //cor do background do canvas
    context.fillRect(0, 0, 16 * box, 16 * box); //vai desenhar o quadrado
}

function criarCobrinha() {
    for (var i = 0; i < snake.length; i++) {
        context.fillStyle = "green"; //cor da cobra
        context.fillRect(snake[i].x, snake[i].y, box, box); //posicao inicial da cobra
    }
}

document.addEventListener('keydown', update); //capta os cliques nos botoes do teclado e chama a funcao update

function update(event) {
    //a direcao da cobrinha nao pode ser a oposta pois ela so tem uma cabeca
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    /*ponto de partida*/
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    /*pra que onde vai a cobrinha?*/
    if (direction == "right") snakeX += box; //acrescenta um quadradinho
    if (direction == "left") snakeX -= box; //decrementa um quadradinho
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop(); //retira o ultimo elemento do array

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //insere um elemento no comeco do array
}

let jogo = setInterval(iniciarJogo, 100); //a cada 100ms a funcao sera renovada

