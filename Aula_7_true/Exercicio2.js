var rs = require("readline-sync")

var num = rs.questionInt("Digite um numero: ")
var num2 = rs.questionInt("Digite um numero: ")
var result = 0

while (num2 > 0){
    result = result + num 
    
    num2--    
}console.log(result)