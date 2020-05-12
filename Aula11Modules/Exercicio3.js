var rs = require("readline-sync")
var fs = require("fs")

var carro = fs.readFileSync("./carro.Json")
var carroPronto = JSON.parse(carro)

console.log(carroPronto)
