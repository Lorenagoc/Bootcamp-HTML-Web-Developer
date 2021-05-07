/*

Desafio
Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

*/

var par = 0;
var impar = 0;
var positivo = 0;
var negativo = 0;

for(var i=0; i<5; i++){
  
  let value = gets();
  
  if(value > 0){
    positivo = positivo + 1;
  }else if(value < 0){
    negativo = negativo + 1;
  }
  
  if(value%2 == 0){
    par = par + 1;
  }else{
    impar = impar + 1;
  }
}

console.log(par+" valor(es) par(es)");
console.log(impar+" valor(es) impar(es)");
console.log(positivo+" valor(es) positivo(s)");
console.log(negativo+" valor(es) negativo(s)");