var btn = document.querySelector('button.btn-Action');

btn.addEventListener('click', Click);
btn.addEventListener('mouseenter', Enter);
btn.addEventListener('mouseout', Exit);

function Click()
{
    btn.innerHTML = 'Clicou!';
    btn.style.background = 'green';
    document.getElementsByTagName('body')[0].style.display = 'block';
}

function Enter()
{
    btn.innerHTML = 'Entrou!!!';
    btn.style.background = 'blue'
    btn.style.width = '150px';
    btn.style.height = '150px';
    btn.style.fontSize = '18px';
}

function Exit()
{
    btn.innerHTML = 'Saiu!!!';
    btn.removeAttribute('style');
}