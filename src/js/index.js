//Pegar o elemento do click na tela.
//Pegar os elementos de id do conselho e descrição do conselho.

const button = document.querySelector(".advice-button");
let advice = document.getElementById("advice");
let adviceNumber = document.getElementById("advice-number")


button.addEventListener('click', function(){
    randomAdvice()
})

//Função responsavel por pegar os dados da API

async function deckAdvices(){
    const url = "https://api.adviceslip.com/advice"
    const answer = await fetch(url)
    return await answer.json()

}

//Criar função para pegar os dados e alterar o innerHTML da page.

async function randomAdvice(){
    const deck = await deckAdvices()
    const adviceId = deck.slip.id
    const advicePhrase = deck.slip.advice
    adviceNumber.innerHTML = "ADVICE #" + adviceId
    advice.innerHTML = advicePhrase
}

deckAdvices()

//Retornar a função criada no evento de clique criado la em cima.