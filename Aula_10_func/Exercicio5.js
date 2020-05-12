var rs = require("readline-sync")
var n1 = 0
var n2 = 0
var n3 = 0

function QualeMaior(n1, n2){
    n1 = rs.questionInt("Diga um numero ")
    n2 = rs.questionInt("Diga um numero ")
    if (n1 > n2){
         n3 = n2
    }else if (n2 >n1){
         n3 = n1
    }else console.log(`${n2} e ${n1} sao iguais.`)

    return n3
}

console.log(`O menor numero e ${QualeMaior()}`)