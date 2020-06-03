var rs = require("readline-sync")
var numero = 0
var ArrayDeNumeros = []
var soma = 0
function numeroPerfeito() {
    numero = rs.questionInt("Diga um numero ")
    var cont = 0
    while (cont < numero) {
        if (numero % cont == 0) {
            ArrayDeNumeros.push(cont)
        }
        cont++
        }
        for (var i = 0; i < ArrayDeNumeros.length; i++){
            soma = soma + ArrayDeNumeros[i]
        }
        if (soma == numero){
            console.log(`Este é um numero perfeito pois a soma de  ${ArrayDeNumeros} resulta em ${numero}` )
        }
        else console.log(`O numero ${numero} nao é perfeito`)
}
numeroPerfeito()