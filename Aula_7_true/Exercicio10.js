var rs = require("readline-sync")

var num = rs.questionInt("Digite um numero: ")
var cont = num
while (cont >= 0) {
    if (num % cont == 0) {
        console.log(cont)
        cont--
    } else {
        cont--
    }
}