var rs = require("readline-sync")

function calculoDePontencia(n1,n2){
    var n1 = rs.questionInt("Digite um numero: ")
    var n2 = rs.questionInt("Digite um numero para ser a potencia: ")
    var result = 1
    while(n2 > 0){
        result = result * n1
        n2--
        }
    console.log("Resultado final " ,result)
}

calculoDePontencia()

