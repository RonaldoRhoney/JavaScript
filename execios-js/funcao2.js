//aRMAZENANDO UMA FUNCAO EM UMA VARIÁVEL
const imprimeSoma = function(a, b){
    console.log(a + b)
}

imprimeSoma(2, 3)

//ARMAZENANDO UMA FUNCAO ARROW EM UMA VARIÁVEL
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//RETORNO IMPLÍCITO
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
