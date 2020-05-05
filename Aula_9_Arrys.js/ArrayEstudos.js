/*console.log(typeof Array, typeof new Array, typeof ["1","2","3"])

let aprovados = ["Bia", "Carlos", "Ana"]

console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Paulo"
console.log(aprovados[3])

aprovados.push("Andre")
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = "Rafael"
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]//deleta mas nao corrige o array

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1,1)// deleta elementos e corrige o array
console.log(aprovados)

pilotos.pop()//Elimina o ultimo elemento do array

pilotos.push("Verstappen")//adiciona um elemento ao array

pilotos.shift()// remove o primeiro lemento do array

pilotos.unshift("Hamilton")//Adiciona um elemnto no inicio do array

pilotos.splice(2, 0, "Botas", "Massa")// Pode adicionar ou remover elementos do Array

pilotos.splice(3, 1)// Pode adicionar ou remover elementos do Array

pilotos[index] //Retorna o elemento pelo índice informado

pilotos.lenght //permite saber o tamanho do array

pilotos.concat //permite juntar dois arrays em um só 

//ForEach

aprovados = ["Bia", "Carlos", "Ana", "Pedro"]

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)*/

Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

aprovados = ["Bia", "Carlos", "Ana", "Pedro"]

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

