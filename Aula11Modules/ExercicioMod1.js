var median = require('median')
var rs = require("readline-sync")

var QuantasNotasInseridas = rs.questionInt("Diga quantas notas serao inseridas no sistema: ")
var notas = [ ]
while (QuantasNotasInseridas > 0){
    var pergunta = rs.questionInt("Diga a sua nota: ")
    notas.push(pergunta)
    QuantasNotasInseridas--
}
var media = median(notas)
console.log(notas)
console.log(`A media de suas notas é ${media}`)