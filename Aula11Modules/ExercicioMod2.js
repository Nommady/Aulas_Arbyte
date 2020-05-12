const FasamImc = require('fasam-imc-calc');
var rs = require("readline-sync")

var Peso = rs.questionFloat("Diga seu peso: ")
var Altura = rs.questionFloat("Diga sua altura: ")
var imc = new FasamImc()
var resultado = imc.calc(Peso, Altura)
console.log("Seu imc é " + resultado)