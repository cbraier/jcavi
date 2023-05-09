//string
//number
//array
//boolean

//object

//let carro = {
// marca: 'ford',
// cor: 'branco',
//ano: 2020,

//}

//carro.modelo = "gol"

//alert(carro.cor)


let carros = [];

//Validar se placa tem 8 "mev-1234"
//Validar se carros apartir de "2018"



function cadastrarCarro() {

    let placa = prompt('digite a placa')
    let cor = prompt('digite a cor')
    let ano = prompt('digite o ano')

    let carro = {
        placa: placa,
        cor: cor,
        ano: ano,  //JS ja entende...nao precisa coloca placa: placa....apenas placa,...
    }

    carros.push(carro)

    executarMenu()
}

function pesquisarCarro() {
    let placaPesquisa = prompt('Digite a placa de pesquisa!')

    for (let i = 0; i < carros.length; i++) {
        let carro = carros[i]

        if (placaPesquisa == carro.placa) {
            alert(`
Placa: ${carro.placa}
Cor: ${carro.cor}
Ano: ${carro.ano}
`)
            executarMenu()
        }
    }


    alert('Carro não encontrado')
    executarMenu()
}

function pesquisarCarrosAno() {
    let ano = prompt('Digite o ano de pesquisa!')
    let msg = ''

    for (let i = 0; i < carros.length; i++) {
        const carro = carros[i];
        if (carro.ano == ano) {
            msg += `Placa: ${carro.placa | Cor: ${ carro.cor } | Ano: $(carro.ano)
    }
        }
alert(msg)
executarMenu()
    }

let carrosEncontrados =

    executarMenu()

//pesquisarCarrosAno

function executarMenu() {
    let acao = prompt(`
        (1) Cadastrar automóvel
        (2) Pesquisar automóvel
        (3) Pesquisar carros por ano
        (4) Excluir
        (5) Atualizar 
        (6) Sair
    `)

    if (acao == "1") {
        cadastrarCarro()
    } else if (acao == "2") {
        pesquisarCarro()
    }
}

executarMenu()


