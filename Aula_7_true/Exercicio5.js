var rs = require("readline-sync")

var num = rs.questionInt("Digite um numero: ")
var num2 = rs.questionInt("Digite um numero para ser a potencia: ")//é a potencia que define quantas vezes sera rodado o programa
var result = 1
while(num2 > 0){
    result = result * num
    num2--
    }
console.log("Resultado final " ,result)