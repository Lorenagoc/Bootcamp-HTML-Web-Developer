// MANIPULANDO ELEMENTOS DA PÁGINA
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar() {
    window.open("https://www.google.com/"); //abre em outra aba
    //window.location.href = "https://www.google.com/"; //abre na mesma aba
}

function trocar(elemento) {
    //alert("Trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada");
}

function change(elemento) {
    console.log(elemento.value);
}

/* FUNÇÕES, VARIAVEIS LOCAIS, VARIAVEIS GLOBAIS
function soma(n1, n2) {
    return n1 + n2;
}

var validar; //global
function validaIdade(idade) {
    validar; //local
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Insira sua idade");
validaIdade(idade);
console.log(validar);
//console.log(validaIdade(idade));*/

/* DATAS
var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());*/

/* LAÇOS DE REPETIÇÃO, CONDICIONAIS, PROMPT
var count;
for(count=0; count<5; count++){
    alert(count);
}
var count = 0;
while(count < 5){
    console.log(count);
    count++;
}
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};*/

/* DICIONÁRIO, LISTA DE DICIONÁRIOS
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxo"}];
console.log(frutas);
alert(frutas[1].nome);*/
/*var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

/* LISTA, STRING
var lista = ["maça", "pêra", "laranja"];
console.log(lista[1]);
lista.push("uva");
lista.pop();
console.log(lista.toString());
console.log(lista.join(" - "));*/

/* VARIÁVEIS, ALERT, CONSOLE.LOG
var nome = "Lorena";
var n1 = 21;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + n1 + " anos");
alert(n1 + n2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());*/