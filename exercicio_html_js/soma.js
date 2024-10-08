const form = document.getElementById('form-conta');
const numeroB = document.getElementById('numero-b');
const numeroA = document.getElementById('numero-a');
let formEValido = false;

function validaSoma(numeroB, numeroA) {
    const valorB = parseInt(numeroB.value);
    const valorA = parseInt(numeroA.value);
    return valorB > valorA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroB = document.getElementById('numero-b');
    const numeroA = document.getElementById('numero-a');
    const mensagemSucesso = `Número B: <b>${numeroB.value}</b> é maior que Número A: <b>${numeroA.value}</b>. `;

    formEValido = validaSoma(numeroB, numeroA);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroB.value = '';
        numeroA.value = '';
        numeroB.classList.remove('error');
        numeroB.style.border = ''
        document.querySelector('.error-b').style.display = 'none';
    } else {
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-b').style.display = 'block';
    }
});

numeroB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaSoma(numeroB, numeroA)

    if (!formEValido) {
        numeroB.classList.add('error');
        document.querySelector('.error-b').style.display = 'block';
    }else {
        numeroB.classList.remove('error');
        numeroB.style.border = '';
        document.querySelector('.error-b').style.display = 'none';
    }
});