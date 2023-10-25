let number = document.querySelector('input.number');
let btn = document.querySelector('button.btn')
btn.addEventListener('click', Click)

const secretNumber = 7;

function Click()
{
    if(number.value > secretNumber)
    {
        alert(`O número digitado é maior que o número secreto`)
    }
    else if (number.value == secretNumber)
    {
        alert(`Parabéns! Você acertou! O número secreto é ${secretNumber}`);
    }
    else
    {
        alert(`O número digitado é menor que o número secreto`)
    }
}