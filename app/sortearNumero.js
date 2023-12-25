const menorValor = 1;
const maiorValor = 1000;
let numeroSecreto = gerarNumeroAleatorio(); //variavel para gerar n ao reiniciar.

function gerarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor;
    console.log('Número Secreto Gerado:', numero);
    return numero;
}

console.log('Número Secreto', numeroSecreto);



const elementMenorValor = document.getElementById('menor-valor');
elementMenorValor.textContent = menorValor;

const elementMaiorValor = document.getElementById('maior-valor');
elementMaiorValor.textContent = maiorValor;
