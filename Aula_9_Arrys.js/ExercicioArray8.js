var rs = require("readline-sync")

var cont = 0
var DadosASeremSolicitados = rs.question("Diga quais sao os dados a seres solicitados: ").split(";")

var DadosFornecidos = rs.question("Informe os dados conforme solicitado: ").split(";")

while (cont < DadosASeremSolicitados.length){
    console.log(DadosASeremSolicitados[cont],": ",DadosFornecidos[cont])
    cont++
}
