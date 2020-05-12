var rs = require("readline-sync")

function AdicionaValorAbsoluro() {
    var numeroSolicitado = rs.question("digite um numero: ")
    var numeroDigitado = numeroSolicitado
    if (numeroDigitado < 0) {
        numeroDigitado = numeroDigitado * -1
    }
    numeroDigitado = numeroDigitado.split("")

    console.log(`O valor absoluto de ${numeroDigitado[0]} em ${numeroSolicitado} e ${numeroDigitado[0]} `)
    console.log(`O valor absoluto de ${numeroDigitado[1]} em ${numeroSolicitado} e ${numeroDigitado[1]} `)
    console.log(`O valor absoluto de ${numeroDigitado[2]} em ${numeroSolicitado} e ${numeroDigitado[2]} `)

}

AdicionaValorAbsoluro()