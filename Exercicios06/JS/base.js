let btnClick1 = document.querySelectorAll('button.btn')[0];
let btnClick2 = document.querySelectorAll('button.btn')[1];
let btnClick3 = document.querySelectorAll('button.btn')[2];

btnClick1.addEventListener('click', Click);
btnClick2.addEventListener('click', ClickTwo);
btnClick3.addEventListener('click', ClickThree);

function Click()
{
    alert('Você clicou no botão!');
}

function ClickTwo()
{
    var name = prompt('Qual é seu nome?');
    alert(`Olá, ${name}! Seja bem-vindo!`);
}

function ClickThree()
{
    var number1 = Number(prompt('Digite um número:'));
    var number2 = Number(prompt('Digite outro número:'));

    var total = number1 + number2;

    alert(`A soma entre ${number1} e ${number2}, é ${total}`);
}