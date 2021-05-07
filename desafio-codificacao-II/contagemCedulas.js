/*

Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

*/

let valor = parseInt(gets());
console.log(valor);
let notas = [100, 50, 20, 10, 5, 2, 1];

for (let nota of notas) {
    let qtdNotas = Math.floor(valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}