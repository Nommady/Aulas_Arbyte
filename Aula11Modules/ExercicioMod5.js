var {AgeFromDateString, AgeFromDate} = require('age-calculator')
var rs = require("readline-sync")

var AnoDeNascimento = rs.questionInt("Diga seu ano de nascimento: ")
var MesDeNascimento = rs.questionInt("Diga seu mes de nascimento: ")
var DiaDeNascimento = rs.questionInt("Diga seu dia de nascimento: ")

var AgeFromDate = new AgeFromDate(new Date(AnoDeNascimento, MesDeNascimento, DiaDeNascimento)).age;
console.log(AgeFromDate)

var idade = rs.questionInt("Diga sua data de nascimento como no exemplo: xxxx-xx-xx (Ano-Dia-Mes): ")

var ageFromString = new AgeFromDateString(idade).age
console.log(ageFromString)
