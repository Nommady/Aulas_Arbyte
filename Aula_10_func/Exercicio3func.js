var rs = require("readline-sync")

function calcularDataEmDias() {
    var dataDeNascimento = []
    var ano = rs.question("Diga o ano: ")
    ano = ano * 365
    dataDeNascimento.push(ano)
    var mes = rs.question("Diga o mes: ")
    mes = mes * 30
    dataDeNascimento.push(mes)
    var dia = rs.question("Diga o dia: ")
    dia = dia * 1
    dataDeNascimento.push(dia)
    resultado = (dataDeNascimento[0] + dataDeNascimento[1] + dataDeNascimento[2])

    return resultado
}

console.log(calcularDataEmDias())

