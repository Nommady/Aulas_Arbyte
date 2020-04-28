var rs = require("readline-sync")

var num = rs.questionInt("Digite um numero: ")
num2 = 10
while (num2 >= 1) {   
    var result = num * num2    
    console.log(num, "x", num2,"=", result)
    num2--
} 