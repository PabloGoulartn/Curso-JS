let nota1 = Number(prompt("Digite uma nota: "));
let nota2 = Number(prompt("Digite outra nota: "));

let media = (nota1 + nota2) / 2;

console.log(media)
console.log(media == '3'); // compara se os 2 valores são iguais
console.log(media === '3'); // compara se os 2 valores são iguais e do mesmo tipo

alert(media >= 5? 'Aprovado' : "Reprovado");