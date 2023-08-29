'use strict'
let fatorEscolhido;
let erros = 0;
let acertos = 0;

//------------------------------------------------------
//Função que  escolhe o fator da tabuada a ser praticada
function escolher_tabuada(num){
    let btIniciar = document.createElement("button")
        btIniciar.innerText = "Iniciar"
        btIniciar.id = "iniciar"
        btIniciar.onclick = ()=>{
            let status = document.getElementById("status")
            status.style.display = "flex"
            document.getElementById("iniciar").remove()
            botoesResposta()}
        btIniciar.className = "bts"
    
    limpaBts()
        
    document.getElementById("cab").innerHTML = num + "  X  ?"
    document.getElementById("painel").insertAdjacentElement("afterbegin",btIniciar)
    

    return num;
}


//Remove os botões-----
function limpaBts(){
    let apagar = document.getElementsByClassName("bts")
    for(let i = 0 ; i < apagar.length; i+1){
        apagar[i].remove();
}
}


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
    limpaBts()
    let palpite;
    let lista_opcoes = seed_botoesResposta();
    let resultado = lista_opcoes[0];
    lista_opcoes.sort(()=> .5 - Math.random());
    
  
    let painel = document.getElementById("painel")

    let bt1 = document.createElement("button")
    bt1.innerText= lista_opcoes[0]
    bt1.className = "bts"
    bt1.value = lista_opcoes[0]
    bt1.addEventListener("click", () => { 
        palpite =  lista_opcoes[0] 
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    let bt2 = document.createElement("button")
    bt2.innerText= lista_opcoes[1]
    bt2.className = "bts"
    bt2.value = lista_opcoes[1]
    bt2.addEventListener("click", () => { 
        palpite =  lista_opcoes[1] 
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    let bt3 = document.createElement("button")
    bt3.innerText= lista_opcoes[2]
    bt3.className = "bts"
    bt3.value = lista_opcoes[2]
    bt3.addEventListener("click", () => { 
        palpite =  lista_opcoes[2] 
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    let bt4 = document.createElement("button")
    bt4.innerText= lista_opcoes[3]
    bt4.className = "bts"
    bt4.value = lista_opcoes[3]
    bt4.addEventListener("click", () => { 
        palpite =  lista_opcoes[3] 
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    let bt5 = document.createElement("button")
    bt5.innerText= lista_opcoes[4]
    bt5.className = "bts"
    bt5.value = lista_opcoes[4]
    bt5.addEventListener("click", () => { 
        palpite =  lista_opcoes[4] 
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    let bt6 = document.createElement("button")
    bt6.innerText= lista_opcoes[5]
    bt6.className = "bts"
    bt6.value = lista_opcoes[5]
    bt6.addEventListener("click", () => { 
        palpite =  lista_opcoes[5] 
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    painel.insertAdjacentElement("afterbegin",bt1)
    painel.insertAdjacentElement("afterbegin",bt2)
    painel.insertAdjacentElement("afterbegin",bt3)
    painel.insertAdjacentElement("afterbegin",bt4)
    painel.insertAdjacentElement("afterbegin",bt5)
    painel.insertAdjacentElement("afterbegin",bt6)

    verifica_final()
}

function verifica_resposta(resultado,palpite){
    let status = document.getElementById("status")
    let aux = status.innerHTML
        if(resultado == palpite){
                acertos += 1      
        }else{
            erros += 1   
        }
        status.innerHTML = "Acertos " + acertos + " " + "<br>Erros   " + erros
}

function verifica_final(){
    if((erros + acertos)>19){
        limpaBts()
        let painel = document.getElementById("painel")
        let reiniciar = document.createElement("button")
        reiniciar.innerText= "reiniciar"
        reiniciar.className = "bts"
        reiniciar.onclick = ()=>{ document.location = "index.html"}
        reiniciar.id = "reiniciar"

        
        painel.insertAdjacentElement("beforeend",reiniciar)


    }
}
