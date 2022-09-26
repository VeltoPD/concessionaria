const carros = [
    {
        nome: "Gol",
        ano: 2021,
        cores: ['Azul', ' Branco', ' Prata']
    },
    {
        nome: "Palio",
        ano: 2017,
        cores: ['Preto', ' Branco', ' Vermelho']
    }
];

//Digite o nome e o ano dos carros guardando os valores da propriedade array em strings
for (const laco of carros) {
    console.log(laco.nome)
    console.log(laco.ano)
    console.log(laco.cores.join(', '))
}

//join é uma high order function




// Exiba cada item da constante carros a partir de uma iteração do laço
for (const iteracao of carros) {
    for (propriedade in iteracao) {
        console.log(`${propriedade}: ${iteracao[propriedade]}`)
    } console.log("--------------------------")
}


// Crie uma função que receba como parâmetro um objeto, e devolva a string de pratosTipicos
// com os dados do objeto
function relatorio(carros) {
    let string_relatorio = '';
    for (const repeticao of carros) {
        for (propriedade in repeticao) {
            string_relatorio += `${propriedade}: ${repeticao[propriedade]} `;
        }
    } return string_relatorio;
}
console.log(relatorio(carros));


//Crie uma função que recebe um array de objetos e uma string. Essa função deve retornar
//um objeto, e o objeto retornado deve possuir apenas os itens que contenham o nome/título
//igual a string passada como parâmetro. Caso não exista o item, exiba um alert indicando não encontrado.
function buscaItem(carros, itemProcurado) {
    let encontrouItem = false;
    for (const contador of carros) {
        for (propriedade in contador) {
            if (contador['nome'] == itemProcurado) {
                encontrouItem = true;
                return contador;
            }
        }
    } if (encontrouItem == false) {
        alert('Item nao encontrado');
        return 0;
    }
} console.log(buscaItem(carros, 'Palio'));

