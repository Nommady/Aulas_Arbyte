var fs = require('fs')
var rs = require("readline-sync")

/*var xicara = new Object({
    peso: 0.1,
    forma: "Padrao",
    material: "Plastico",
    estampa: "Urso",
    preco: 5.50,
    fragil: false,
    estoque: true,
    desconto: `Com o desconto de 40% o valor é de ${(5.50 / 100) * 40}`
})

var xicaraSerializada = JSON.stringify(xicara)
console.log(xicaraSerializada)
fs.writeFileSync('Aula10Obj/xicara.Json', xicaraSerializada)*/

var xicaraEmString = fs.readFileSync('Aula10Obj/xicaraEmString.json')
var xicara = JSON.parse(xicaraEmString)
console.log(xicara)

