'use strict'
let fatorEscolhido;
let erros = 0;
let acertos = 0;
let pontos = 0 ;

//Função que  escolhe o fator da tabuada a ser praticada
function escolher_tabuada(num){
    let btIniciar = document.createElement("button")
        btIniciar.innerText = "Iniciar"
        btIniciar.id = "bts_iniciar"
        btIniciar.onclick = ()=>{
            let status = document.getElementById("status")
            status.style.display = "flex"
            document.getElementById("bts_iniciar").remove()
            botoesResposta()}
        
    
    limpaBts()
        
    document.getElementById("cab").innerHTML = num + "  X  ?"
    document.getElementById("painel").insertAdjacentElement("afterbegin",btIniciar)
    document.getElementById("painel").id="painel_palpites"
    

    return num;
}

//Remove os botões-----
function limpaBts(){

    let botaoIniciar = document.getElementById("bts_iniciar")
        if(botaoIniciar){
            document.getElementById("bts_iniciar").remove()
        }
    
    let apagar = document.getElementsByClassName("bts")
        for(let i = 0 ; i < apagar.length; i+1){
            apagar[i].remove();
            }
}

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

    
    return opcoes;
}


let algoritmo_embaralha_array = (array) => {
    
    let arrayInicial = [...array];
    let arrayShuffle = new Array();

   
    let loopControl = arrayInicial.length;
    let checkMinusOne = 0;
    
    while(loopControl != 0 ){
    
        let numero = Math.floor(Math.random() * (arrayInicial.length))
       
        if(arrayInicial[numero] != -1){
        arrayShuffle.push(arrayInicial[numero])
        arrayInicial[numero] = -1;
        checkMinusOne++;
        loopControl--;
        }else if(checkMinusOne == arrayInicial.length){
            loopControl = 0;
        }    
    }
    return arrayShuffle
}

//Botões com os valores dos palpites
function botoesResposta(){
    limpaBts()
    let palpite;
    let lista_opcoes = seed_botoesResposta();
    let resultado = lista_opcoes[0];
    lista_opcoes = algoritmo_embaralha_array(lista_opcoes);

    
    let relogio = barraTime()
    
   
    let painel = document.getElementById("painel_palpites")
    

    let bt1 = document.createElement("button")
    bt1.innerText= lista_opcoes[0]
    bt1.className = "bts"
    bt1.value = lista_opcoes[0]
    bt1.addEventListener("click", () => { 
        palpite =  lista_opcoes[0] 
        clearInterval(relogio)
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    let bt2 = document.createElement("button")
    bt2.innerText= lista_opcoes[1]
    bt2.className = "bts"
    bt2.value = lista_opcoes[1]
    bt2.addEventListener("click", () => { 
        palpite =  lista_opcoes[1] 
        clearInterval(relogio)
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    let bt3 = document.createElement("button")
    bt3.innerText= lista_opcoes[2]
    bt3.className = "bts"
    bt3.value = lista_opcoes[2]
    bt3.addEventListener("click", () => { 
        palpite =  lista_opcoes[2] 
        clearInterval(relogio)
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    let bt4 = document.createElement("button")
    bt4.innerText= lista_opcoes[3]
    bt4.className = "bts"
    bt4.value = lista_opcoes[3]
    bt4.addEventListener("click", () => { 
        palpite =  lista_opcoes[3]
        clearInterval(relogio)
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    let bt5 = document.createElement("button")
    bt5.innerText= lista_opcoes[4]
    bt5.className = "bts"
    bt5.value = lista_opcoes[4]
    bt5.addEventListener("click", () => { 
        palpite =  lista_opcoes[4]
        clearInterval(relogio)
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    let bt6 = document.createElement("button")
    bt6.innerText= lista_opcoes[5]
    bt6.className = "bts"
    bt6.value = lista_opcoes[5]
    bt6.addEventListener("click", () => { 
        palpite =  lista_opcoes[5]
        clearInterval(relogio)
        verifica_resposta(resultado,palpite)
        botoesResposta();
    })

    painel.insertAdjacentElement("afterbegin",bt1)
    painel.insertAdjacentElement("afterbegin",bt2)
    painel.insertAdjacentElement("afterbegin",bt3)
    painel.insertAdjacentElement("afterbegin",bt4)
    painel.insertAdjacentElement("afterbegin",bt5)
    painel.insertAdjacentElement("afterbegin",bt6)

    verifica_final(relogio)
}

//-------Barra do temporizador ------
function barraTime(){
    
    const status = document.getElementById("status")
    const barra = document.createElement("div")
          barra.id = "barra"

    status.insertAdjacentElement("afterbegin",barra)
    
    let fatiaTempo = 140/20
    let heiBarra = document.defaultView.getComputedStyle(barra,null).height.replace("px","")
    let auxColor = 0

   let relogio = setInterval(()=>{
        heiBarra = document.defaultView.getComputedStyle(barra,null).height.replace("px","")
        auxColor = parseInt(heiBarra)
        barraCor(auxColor)
        barra.style.height = (parseInt(heiBarra) + fatiaTempo) + "px"
        
        if(parseInt(heiBarra) >= 133){
            clearInterval(relogio)
        }
    },1000)
    return relogio
}

//Aferi a pontuação relacionando com tempo de resposta
function pontuacaoPeloTempo(){
    let alturaDaBarra = parseInt(document.getElementById("barra").style.height.replace("px",""))
        if(alturaDaBarra <=70){
            return 0
        }else if(alturaDaBarra >=71 && alturaDaBarra <=91){
            return 3
        }else if(alturaDaBarra>92 && alturaDaBarra <= 126){
            return 5
        }else{
            return 7
        }
}

//Muda a cor da barra conforme o tempo passa
function barraCor(intAlturaDaBarra){
    let barra = document.getElementById("barra")
    if(intAlturaDaBarra <=70){
        barra.style.backgroundColor = "darkolivegreen";
    }else if(intAlturaDaBarra >=71 && intAlturaDaBarra <=119){
        barra.style.backgroundColor = "yellow";
    }else{
        barra.style.backgroundColor = "red";
    }
}

function verifica_resposta(resultado,palpite){
    let status = document.getElementById("status")
    let altBarra = pontuacaoPeloTempo()
    let aux = status.innerHTML
        if(resultado == palpite){
                acertos += 1  
                pontos += (10 - altBarra)     
        }else{
            erros += 1   
        }
        status.innerHTML = "Acertos " + acertos + " " + 
                            "<br>Erros   " + erros + 
                            "<br>barra: " + altBarra +
                            "<br>Pontos:" + parseFloat(pontos /2 )
        
}

function verifica_final(numero){
    if((erros + acertos)>19){
        limpaBts()
        clearInterval(numero)
        let painel = document.getElementById("painel_palpites")
        let reiniciar = document.createElement("button")
        reiniciar.id = "bts_iniciar"
        let placar = document.getElementById("cab")
        placar.innerHTML = "Concluído!!"
        reiniciar.innerText= "reiniciar"
        reiniciar.onclick = () =>{ document.location = "index.html"}
        

        
        painel.insertAdjacentElement("beforeend",reiniciar)


    }
}
