var rs = require('readline-sync')

var num1 = rs.questionInt("Digite um numero: ")
var num2 = rs.questionInt("Digite outro numero: ")

if (num1 < num2){
    cont = num1
    cont2 = num2
}else cont = num2, cont2 = num2;

while (cont < cont2){
    if(cont % 7 == 0 && cont % 5 == 0){
        console.log("Ping Pong")
    }else if (cont % 7 == 0){
        console.log("Ping")
    }else if (cont % 5 == 0){
        console.log("Pong")
    }     
    console.log(cont)
cont++
}


