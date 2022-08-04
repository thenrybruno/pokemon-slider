const botaoAvancar = document.getElementById('btn-avancar')
const botaoVoltar = document.getElementById('btn-voltar')

const cartao = document.querySelectorAll('.cartao')
let cartoes = 0

function removerSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado')
}

function adicionarSelecionado(index){
    cartao[index].classList.add('selecionado')
}

botaoAvancar.addEventListener('click' , () =>{

    if(cartoes === cartao.length - 1) {
        cartoes = -1
    }

    removerSelecionado()

    cartoes ++

    adicionarSelecionado(cartoes)

})

botaoVoltar.addEventListener('click' , () =>{
    removerSelecionado()

    if(cartoes === 0) {
        const cartaoInicio = document.querySelector('.fundo-3')
        cartaoInicio.classList.add('selecionado')
        cartoes = cartao.length -1
    } else {
        cartoes --
    }

    adicionarSelecionado(cartoes)
    
})