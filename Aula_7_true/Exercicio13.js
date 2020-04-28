var rs = require("readline-sync")



var num2 = 1
var num3 = 0
var cont = 5
while (cont > 0){
    var num = rs.questionInt("Digite um numero: ")
    var impar = num % 2
    if (impar !== 0){
        num2 = num2 * num
    }else {
        num3 = num3 + num
    }
    cont--
}
console.log("O produto dos impares :",num2)
console.log("O produto dos pares :",num3)