const isOdd = require('is-odd');
var rs = require("readline-sync")

var numero = rs.questionInt("Diga um numero: ")

var primo = (isOdd(numero))
if (primo == true){
    console.log("O numero é impar")
}else console.log("O numero é par")