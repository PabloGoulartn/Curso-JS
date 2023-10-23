

function Click()
{
    var number1 = Number(prompt("Digite um número:"));
    var number2 = new Date().getHours();
    var result = number1 + number2;
    var double = result * 2;  
    var half = result / 2;

    var resultText = document.createElement('p');
    resultText.innerHTML = `A soma entre <mark>${number1}</mark> e <mark>${number2}</mark> é igual a ${result}! Seu dobro é ${double} e sua metade é ${half}!`;
    document.body.appendChild(resultText);
}