//par nome/valor
const saudacao = 'Opa' //contexto léxico '

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 
    return saudacao
}


//Objeto são grupos animados de pares nome/valor
const cliente = {
    nome: 'Rhoney',
    idade: 36,
    peso: 67,
    endereco:{
        Logadouro: 'Rua JDK',
        numero: 69
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
