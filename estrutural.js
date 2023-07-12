'use strict'
let fatorEscolhido;
let erros = 0;


//------------------------------------------------------
//Função que  escolhe o fator da tabuada a ser praticada
function escolher_tabuada(num){
    let btIniciar = document.createElement("button")
    btIniciar.innerText = "Iniciar"
    btIniciar.id = "iniciar"
    btIniciar.onclick = ()=>{botoesResposta()}
    btIniciar.className = "bts"
        
    let apagar = document.getElementsByClassName("bts")
    for(let i = 0 ; i < apagar.length; i+1){
        apagar[i].remove();
    }
        
    

    document.getElementById("cab").innerHTML = num + "  X  ?"
    document.getElementById("painel").insertAdjacentElement("afterbegin",btIniciar)
    document.getElementById("status").innerHTML = "Status" 

    return num;
}
//-------------------------------------


//-------------------------------------------------------------------
//Função que forma o array, com um valor correto e outros 5 alatórios
function seed_botoesResposta(){
    
    let opcoes = new Array()
    let range_limite = fatorEscolhido * 10
    let fator_desafio = Math.round((Math.random() * 10 ))

    document.getElementById("cab").innerHTML = fatorEscolhido + "  X  " + fator_desafio
    opcoes.unshift(fatorEscolhido * fator_desafio)


    let contador = 1;
    while(contador < 6){
    let fator_opcao = Math.round((Math.random() * range_limite))
        if( !(opcoes.includes(fator_opcao)) &&  fator_opcao != opcoes[0] ){
            opcoes.push(fator_opcao)
            contador++
        } 
    }
    return opcoes
}

function botoesResposta(){
    let lista_opcoes = seed_botoesResposta();
    lista_opcoes.sort(()=> .5 - Math.random());
    console.log(lista_opcoes)
    document.getElementById("iniciar").remove()

    let painel = document.getElementById("painel")

    let bt1 = document.createElement("button")
    bt1.innerText= lista_opcoes[0]
    bt1.className = "bts"
    bt1.value = lista_opcoes[0]

    let bt2 = document.createElement("button")
    bt2.innerText= lista_opcoes[1]
    bt2.className = "bts"
    bt2.value = lista_opcoes[1]

    let bt3 = document.createElement("button")
    bt3.innerText= lista_opcoes[2]
    bt3.className = "bts"
    bt3.value = lista_opcoes[2]

    let bt4 = document.createElement("button")
    bt4.innerText= lista_opcoes[3]
    bt4.className = "bts"
    bt4.value = lista_opcoes[3]

    let bt5 = document.createElement("button")
    bt5.innerText= lista_opcoes[4]
    bt5.className = "bts"
    bt5.value = lista_opcoes[4]

    let bt6 = document.createElement("button")
    bt6.innerText= lista_opcoes[5]
    bt6.className = "bts"
    bt6.value = lista_opcoes[5]

    painel.insertAdjacentElement("afterbegin",bt1)
    painel.insertAdjacentElement("afterbegin",bt2)
    painel.insertAdjacentElement("afterbegin",bt3)
    painel.insertAdjacentElement("afterbegin",bt4)
    painel.insertAdjacentElement("afterbegin",bt5)
    painel.insertAdjacentElement("afterbegin",bt6)

}