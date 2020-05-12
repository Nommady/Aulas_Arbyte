var rs = require("readline-sync")
var num;
var num2 = 0
var result = 0

function tabuada() {
    num = rs.questionInt("Digite um numero: ")
    while (num2 <= num) {
        result = num * num2
        console.log(num2, "x", num, "=", result)
        num2++
    }
}
tabuada()