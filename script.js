const menorNumero = 0;
const maiorNumero = 100;

const numeroGerado = gerarNumero();

function gerarNumero(){
    return parseInt(Math.random() * (maiorNumero + 1));
}

const menorElemento = document.querySelector("#menor-valor");
menorElemento.innerHTML = menorNumero;


const maiorElemento = document.querySelector("#maior-valor");
maiorElemento.innerHTML = maiorNumero;