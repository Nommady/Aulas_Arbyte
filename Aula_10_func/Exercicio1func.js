var rs = require("readline-sync")

function volume(){
    var valor = (4/3) * Math.PI * (raio ** 3)
    return valor
}

var raio = rs.questionFloat("Insira o raio:" )

console.log(volume().toFixed(2))