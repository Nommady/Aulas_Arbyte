var lodash = require('lodash')
var fs = require('fs')
var rs = require('readline-sync')
var json = fs.readFileSync('./cars.json')
var cars = JSON.parse(json)

// console.log(cars[0].Car)
// // Exercicio 1
// var resultado = 0
// var num = rs.questionInt("Diga uma potencia para o carro: ")
// var maiorPotencia = cars.filter((cars)=> cars.Horsepower > num );

// console.log(maiorPotencia.length)

// // Exercicio 2
// var CarsJapan = cars.filter((cars)=> cars.Origin == 'Japan' );
// console.log(CarsJapan.length)

// // Exercicio 3
// var CarrosFord = cars.filter((cars)=> cars.Car.includes("Ford"));
// console.log(CarrosFord.length)

// // Exercicio 4
// var carsEuro = cars.filter((cars)=> cars.Origin == 'Europe' )
// var Hpower = 0
// for (var i = 0; i < carsEuro.length; i++){
//     Hpower = Hpower + carsEuro[i].Horsepower
// }
// var media = Hpower / carsEuro.length
// console.log(media.toFixed(2))

// // Exercicio 5
//  var carrosMaisPotentes = lodash.sortBy(cars, c => c.Horsepower)
//  var MaiorPotEmCarro = carrosMaisPotentes[carrosMaisPotentes.length - 1]
 // console.log(MaiorPotEmCarro.Car)
 
 // // Exercicio 6 
 // var CarrosPorPotencia = lodash.sortBy(cars, c => c.Horsepower)
 // var MenorPorEmCarros = CarrosPorPotencia[0]
 // console.log(MenorPorEmCarros.Car)
 
 //Exercicio 7
 
 var carrosMaisPotentes = lodash.sortBy(cars, c => c.Horsepower)
 var MaiorPotEmCarro = carrosMaisPotentes[carrosMaisPotentes.length - 1]

 var carrosMaiorAceleracao = lodash.sortBy(cars, c => c.Acceleration)
 var MaiorAcelEmCarro = carrosMaiorAceleracao[carrosMaiorAceleracao.length - 1]
 
 var escolha = rs.question("Escolha A ou B: ").toLowerCase()
if (escolha == "a"){
    console.log(MaiorPotEmCarro)
}else if (escolha == 'b'){
console.log(MaiorAcelEmCarro)
}    