const km = document.querySelector('input.km');
let btn = document.querySelector('button.btn');
btn.addEventListener('click', Click);

let yourVelocity = document.createElement('p');
let trafficFine = document.createElement('p');
let driveSeatBelt = document.createElement('p');

function Click()
{
    yourVelocity.innerHTML = `Sua velocidade atual é ${km.value}Km/h`;
    document.body.appendChild(yourVelocity);

    if (km.value > 80)
    {
        trafficFine.innerHTML = 'Você está <b>MULTADO</b> por excesso de velocidade';
        document.body.appendChild(trafficFine);
    }
    driveSeatBelt.innerHTML = 'Dirija sempre com cinto de segurança!';
    document.body.appendChild(driveSeatBelt);
}