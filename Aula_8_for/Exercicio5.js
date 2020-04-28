const rs = require("readline-sync")

var num = rs.questionInt("Diga um numero: ")
var resultado = 1

for (var cont = 1; cont <= num; cont++) {
    var resultado = resultado * cont

    console.log(resultado)
    if (cont === num) {
        var repetir = rs.question("Deseja realizar novamente? ")
        if (repetir == "sim" || resultado == "Sim" || resultado == "SIM") {
             cont = 1
             resultado = 1
            num = rs.questionInt("Diga um numero: ")
        }else console.log("Encerrar programa")
    }
}