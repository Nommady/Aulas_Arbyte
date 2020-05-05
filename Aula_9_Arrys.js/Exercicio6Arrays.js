var rs = require("readline-sync")

var numerosDigitados = []

for (cont = 0; cont <10; cont++){
    solicitarNumeros = rs.questionInt("Diga um numero por favor: ")
    numerosDigitados.push(solicitarNumeros)
}
for (var i = 0; i >= numerosDigitados.length; i++){
    if (numerosDigitados[i] > numerosDigitados[i + 1]){
        [numerosDigitados[i], numerosDigitados[i + 1]] = [numerosDigitados[i + 1], numerosDigitados[i]]
    }
    return numerosDigitados
}console.log(numerosDigitados)
