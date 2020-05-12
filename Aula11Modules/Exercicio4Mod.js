var rs = require("readline-sync")
const isPrime = require('prime-number')

var numero = rs.questionInt("Diga um numero: ")

var primo = (isPrime(numero))
if (primo == true){
    console.log("O numero é primo")
}else console.log("O numero nao é primo")