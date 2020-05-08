var rs = require("readline-sync")

var cont = 8
var idade = 0
var menor = 999

while (cont > 0){
    idade = rs.questionInt("Diga sua idade: ")
    if (menor > idade){
        menor = idade
    }cont--
}

console.log(menor)
