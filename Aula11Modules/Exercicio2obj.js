var rs = require("readline-sync")
var fs = require("fs")
function carroMontado() {
    var carro = {};
    carro.cor = rs.question("Diga a cor do carro: ")
    carro.marca = rs.question("Diga a marca do carro: ")
    carro.modelo = rs.question("Diga o modelo do carro: ")
    return carro
}


var carroPronto = carroMontado()
console.log(carroPronto)

var carro = JSON.stringify(carroPronto)
var caminhoDoArquivo = './carro.json';
fs.writeFileSync(caminhoDoArquivo, carro);