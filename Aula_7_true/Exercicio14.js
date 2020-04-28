var rs = require("readline-sync")

var cont = 8
var idade = 0
var maior = 0
while (cont > 0){
    idade = rs.questionInt("Diga sua idade: ")
    if (maior < idade){
        maior = idade
    }cont--
}console.log(maior)
