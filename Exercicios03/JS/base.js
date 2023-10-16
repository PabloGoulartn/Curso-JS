let nota1 = Number(prompt('Digite a primeira nota: '));
let nota2 = Number(prompt('Digite a segunda nota: '));

let media = (nota1 + nota2) / 2;

document.writeln(`<b>Sua média das notas ${nota1} e ${nota2} foi ${media}</b>`); 

let n1 = 12.4;
let n2 = 89.2;
let n3 = 1820.9
console.log(n1.toFixed(2), n2.toFixed(3).replace('.', ','));

console.log(n3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))