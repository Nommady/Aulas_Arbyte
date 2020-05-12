var rs = require("readline-sync")

function carroMontado() {
    var carro = {};
    carro.cor = rs.question("Diga a cor do carro: ")
    carro.marca = rs.question("Diga a marca do carro: ")
    carro.modelo = rs.question("Diga o modelo do carro: ")
    return carro
}

/*console.log(`A cor do carro é ${carro.cor}`)
console.log(`A marca do carro é ${carro.marca}`)
console.log(`O modelo do carro é ${carro.modelo}`)*/

var carroPronto = carroMontado()
console.log(carroPronto)