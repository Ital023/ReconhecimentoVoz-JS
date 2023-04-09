function verificaNumeroValido(chute){
    //transforma em numero int
    const numero = +chute;

    
    if(verificaNumero(numero) == true){
        if(chute == "game over"){
            document.body.innerHTML = 
            `
            <main class="game-over">
            <h2 class="titulo">Game Over</h2>
            <button id="jogar-novamente" class="btn-novamente">Jogar Novamente</button>
            </main>
            ` 
            return
        }else{
            idChute.innerHTML += `<div>O valor está invalido</div>` 
            return
        }
    }
    if(numero > maiorNumero || numero < menorNumero){    
        idChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorNumero} e ${maiorNumero}</div>`
        return
    }
    if(numero === numeroGerado){
        document.body.innerHTML = 
        `
            <main class="principal">
            <h2 class="titulo">Você acertou!</h2>
            <h3 class="sub-titulo">O número secreto era ${numeroGerado}</h3>
            <button id="jogar-novamente" class="btn-novamente">Jogar Novamente</button>
            </main>
        `
        return 
    }
    else if(numero < numeroGerado){
        idChute.innerHTML += `<p>O numero secreto é maior <i class="fa-solid fa-up-long"></i></p>`
    }else{
        idChute.innerHTML += `<p>O numero secreto é menor <i class="fa-solid fa-down-long"></i></p>`
    }


}

document.body.addEventListener("click",(e)=>{
    if(e.target.id == "jogar-novamente"){
        window.location.reload();
    }
})

function verificaNumero(numero){
    return Number.isNaN(numero);
}