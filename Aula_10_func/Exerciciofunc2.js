var rs = require("readline-sync")
var isprime = require("isprime")
var num = " "
var result = 0

function ePrimoOuNao() {
    num = rs.questionInt("Por favor digite um numero: ")
    result = isprime(num)
    return result
}
ePrimoOuNao(num)
if (result == true) {
    console.log(`O numero é ${num} e primo`)
} else console.log(`O numero ${num} nao e primo`)