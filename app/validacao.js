const numeroDeTentativas = 15;
let tentativasRestantes = numeroDeTentativas;
 
function atualizaTentativasRestantes() {
    const tentativasRestantesElemento = document.getElementById('tentativas-restantes');
    tentativasRestantesElemento.textContent = `Tentativas Restantes: ${tentativasRestantes}`;
}
function verificaChute(chute) {
    const numeroChutado = parseInt(chute);
    const acertouElemento = document.getElementById('acertou');
    const maiorElemento = document.getElementById('maior');
    const menorElemento = document.getElementById('menor');
    const invalidoElemento = document.getElementById('invalido');
    

    if (tentativasRestantes === 0) {
        exibeGameinit();
    } else {
        tentativasRestantes--;
        if (!isNaN(numeroChutado)) {
            //  chute é um número válido
            if (numeroChutado === numeroSecreto) {
                exibeRespostaNaTela(acertouElemento);
                exibeBotaoJogarNovamente(); 
                return;
            } else if (numeroChutado < numeroSecreto) {
                // n* chutado é menor que o número secreto
                exibeRespostaNaTela(maiorElemento);
            } else {
                // n* chutado é maior que o número secreto
                exibeRespostaNaTela(menorElemento);
            }
        } else {
            if (chute.toUpperCase() === "GAME OVER") {
                exibeGameOver();
            } else {
                exibeRespostaNaTela(invalidoElemento);
            }
        }
    }
    atualizaTentativasRestantes();
}

function exibeRespostaNaTela(respostaElemento) {
    const elementosResposta = document.querySelectorAll('.resposta' );
    elementosResposta.forEach(el => el.style.display = 'none');
    respostaElemento.style.display = 'block';
}
function exibeBotaoJogarNovamente() {
    const botaoJogarNovamente = document.getElementById('jogar-novamente');
    botaoJogarNovamente.style.display = 'block';
    botaoJogarNovamente.addEventListener('click', reiniciarJogo,);
}
function exibeGameinit() {
    const gameinitElemento = document.getElementById('game-init');
    gameinitElemento.style.display = 'block'; 
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    atualizaTentativasRestantes();    
    const gameOverElemento = document.getElementById('game-init');
    gameOverElemento.style.display = 'none';
}
exibeBotaoJogarNovamente(); // ta me dando click    
exibeGameinit(); 