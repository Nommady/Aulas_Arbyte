var rs = require("readline-sync")



var num1 = rs.questionInt("Digite um numero: ")
 var num2 = -1 
while (num2 < num1 ){
    num2++
    if (num2 %2 == 0){
        console.log(num2)
    }   
}