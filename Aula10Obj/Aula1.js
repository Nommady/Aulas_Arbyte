var xicara = new Object({
    peso: 0.1,
    forma: "Padrao",
    material: "Plastico",
    estampa: "Urso",
    preco: 5.50,
    fragil: false,
    estoque: true,
    desconto: `Com o desconto de 40% o valor é de ${(5.50 / 100) * 40}`
})
console.log(xicara.peso)
console.log(xicara.forma)
console.log(xicara.material)
console.log(xicara.estampa)
console.log(xicara.preco)
console.log(xicara.fragil)
console.log(xicara.estoque)
console.log(xicara.desconto)
console.log(xicara)