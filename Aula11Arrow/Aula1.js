var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (var i = 0; i < num.length; i++){
//     console.log(num[i])
// }


// num.forEach((numero, indice) =>{
//     console.log('valor', numero, 'Indice', indice)
// })

// var filtro =num.filter((numero) =>numero % 2 ==0)
// console.log(filtro)

// var num2 = [1524, 23245, 322, 4326, 545, 67, 23526, 455]
// var sorteio = num2.sort((a, b) => {
//     return a > b;
// });
// console.log(sorteio)

var obj = [
    {nome: "Max", idade: 33},
    {nome: "Bru", idade: 34},
    {nome: "Hugo", idade: 28},
    {nome: "Rafa", idade: 35},
]
var objeto = obj[0]

var trintoes = obj.filter((obj) =>{
 if (obj.idade >= 30){
     if(obj.nome =="Rafa")return false;
     return true
 }
 return false
})
console.log(trintoes)