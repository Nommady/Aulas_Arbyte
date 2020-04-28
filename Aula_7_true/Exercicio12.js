var rs = require("readline-sync")

var cont = 15
var result = 0
var result2 = 0

while (cont > 0) {
    var num = rs.questionInt("Digite um numero: ")
     result = result + num       
    cont--    
}
result2 = (result / 15) 
console.log(result2)