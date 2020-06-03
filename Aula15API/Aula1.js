const axios = require('axios')
const rs = require('readline-sync')
var fs = require('fs')
/*
var url = "https://pokeapi.co/api/v2/pokemon/"
var pesquisa = rs.question("digite o nome ou numero do Pokemons: ").toLowerCase()
console.log('\n')

axios.get(`${url}${pesquisa}`)
    .then((resposta) => {
        const pokemon = resposta.data
        var nomeDasHabilidades = [];
        var nomeDosTipos = [];

        var pokeName = pokemon.name
        console.log(`Nome do pokemon: ${pokeName.toUpperCase()}`)

        var IdDosPokemons = pokemon.id
        console.log(`Id do pokemon: ${IdDosPokemons}`)

        pokemon.abilities.forEach((habilidade) => {
            nomeDasHabilidades.push(habilidade.ability.name)
            var mostrarDados = habilidade.ability.name
            console.log(`Habilidades do pokemon: ${mostrarDados}`)
        })

        pokemon.types.forEach((Tipo) => {
            nomeDosTipos.push(Tipo.type.name)
            var tipoDoPokemon = Tipo.type.name
            console.log(`Tipo do pokemon: ${tipoDoPokemon}`)
        })

        var pokeTotal = [{
            nome: pokeName,
            tipo: nomeDosTipos,
            habilidades: nomeDasHabilidades
        }]

        var escolha = rs.questionInt('Digite 1 para salvar e 2 para continuar: ')
        var pokemonCompletos = JSON.stringify(pokeTotal)
        var caminhoDoArquivo = './salvos.json';
        if (escolha == 1) {
            fs.appendFileSync(caminhoDoArquivo, pokemonCompletos + ';');
            console.log(pokeName + " Salvo")
        }
        // var salvos = fs.readFileSync("./salvos.Json")
        // var PokeLista = JSON.parse(salvos)
        // var listaFinal = JSON.stringify(PokeLista)
        // fs.writeFileSync('./Salvo2.json', listaFinal);

    })
    .catch(() => { })*/

/*(OBRIGATORIO)Solicite ao usuário para inserir yes ou no
Após isso utilize a API https://yesno.wtf/api
Esta api traz um dado aleatório yes ou no
No final imprima se o usuário acertou ou não

var url = "https://yesno.wtf/api"

axios.get(url)
    .then((retorno) => {
        var link = retorno.data
        resposta = link.answer
        var digaSimOuNao = rs.question("Say yes or no to compare with the program: ")
        if(digaSimOuNao == resposta){
            console.log("You win!")
        }else console.log("You lose!")

    })

    (OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
    também seu autor
    Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes

var url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes"

axios.get(url)
    .then((retorno) => {
        var link = retorno.data

        link.forEach((quotes) => {
            var fraseDeSerie = quotes.quote
            console.log(fraseDeSerie)
        })
        link.forEach((autor) => {
            var autorDeFrase = autor.author
            console.log(autorDeFrase)
        })

    })

    (OBRIGATORIO)Faça um algoritmo que receba um número de um episódio de
    Breaking Bad.
    Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
    temporada é este episódio.

    Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
    Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
    Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10


    var Ep = rs.questionInt("Diga um numero de episodio de Breaking Bad: ")

    var url = ("https://www.breakingbadapi.com/api/episodes/"+Ep)

axios.get(url)
    .then((retorno) => {
        var link = retorno.data

        link.forEach((titulo) => {
            var tituloDoEp = titulo.title
            console.log(`Titulo do episodio: ${tituloDoEp}`)
        })
        link.forEach((elenco) => {
            var elencoDoEp = elenco.characters
            console.log(`Elenco do episodio: ${elencoDoEp}`)
        })

    })

 4. (OBRIGATÓRIO)Faça um algoritmo que receba uma CEP e diga qual é o endereço
    completo (Cidade, rua, estado) deste CEP.
    Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
    Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020*/

    var cep = rs.question("Diga um numero de CEP sem tracos: ")

    var url = ("https://api.postmon.com.br/v1/cep/"+cep)

axios.get(url)
    .then((retorno) => {
        let link = retorno.data

            let NomeDoBairro = link.bairro
            console.log(`Bairro: ${NomeDoBairro}`)    
      
            let NomeDaCidade = link.cidade
            console.log(`Cidade: ${NomeDaCidade}`)
       
            let NomeDaRua = link.logradouro
            console.log(`${NomeDaRua}`)        
       
            let NomeDoEstado = link.estado
            console.log(`Estado: ${NomeDoEstado}`)

    })
