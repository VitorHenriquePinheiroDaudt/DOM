//Atividade 1
 
let clique1 = document.getElementById(`vitorum`)
let clique2 = document.getElementById(`vitordois`)
let clique3 = document.getElementById(`vitortres`)
 
clique1.addEventListener(`click`, function() {
    clique1.style.backgroundColor = `red`;
})
 
clique2.addEventListener(`click`, function() {
    clique2.style.backgroundColor = `orange`;
})
 
clique3.addEventListener(`click`, function() {
    clique3.style.backgroundColor = `blue`;
})
 
//Atividade 2
 
let clique4 = document.getElementById(`bc`)
let contar2 = document.getElementById(`contador`)
let cliqueParaResetar = document.getElementById(`reset`)
let contar1 = 0
 
clique4.addEventListener(`click`, function() {
    contar1 = contar1 + 1
    contar2.textContent = contar1
})
cliqueParaResetar.addEventListener(`click`, function() {
    contar1 = 0
    contar2.textContent = contar1
})
 
//Atividade 3
 
let escrita1 = document.getElementById(`txtShow`)
let clique5 = document.getElementById(`show`)
let conferir = false
clique5.addEventListener(`click`, function() {
    if(conferir == false) {
        escrita1.innerText = `Palmeiras sem mundial`
        conferir = true
    } else {
        escrita1.innerText = ``
        conferir = false
    }
})
 
//Atividade 4
 
let escrita2 = document.getElementById(`txtEpic`)
let cliqueParaMudarTexto = document.getElementById(`changeTxt`)
 
cliqueParaMudarTexto.addEventListener(`click`, function() {
    escrita2.innerText = prompt(`escreva um texto novo:`)
})
 
//Atividade 5
 
let mostraClique = document.getElementById(`showKey`)
 
document.addEventListener(`keydown`, function(event) {
    mostraClique.innerText = `Você clicou: ${event.key}`
})
 
//Atividade 6
 
let cliqueVotar = document.getElementById(`toVote`)
let nomeDoCandidato = document.getElementById(`candidatoNome`)
let fotoDoCandidato = document.getElementById(`candidatoFoto`)
let candidatoUm
let vitor = 0
let vitorDaudt = 0
let vitorDauf = 0
let vitorDauder = 0
let nulo = 0
cliqueVotar.addEventListener(`click`, function() {
    candidatoUm = prompt(`Insira o número do candidato`)
   
    if (candidatoUm == 55) {
        nomeDoCandidato.innerText = `vitor`
        fotoDoCandidato.innerHTML = `<img src="https://s2-g1.glbimg.com/IM7bzD09MWV8KX-s6cHkOnVYUA8=/65x65/smart/https://s.glbimg.com/jo/el/2024/candidatos/fotos/mg/41386/FMG130002230716_div.jpg" width="100" alt="Candidato vitor">`
        a = prompt(`Confirmar?`)
        vitor = vitor + 1
    } else if (candidatoUm == 10) {
        nomeDoCandidato.innerText = `João`
        fotoDoCandidato.innerHTML = `<img src="https://s2-g1.glbimg.com/zlgwSqikCsgGEV514aM5hUFWpXA=/65x65/smart/https://s.glbimg.com/jo/el/2024/candidatos/fotos/mg/41386/FMG130001994472_div.jpg" width="100" alt="Candidato Jorge do Banco">`
        a = prompt(`Confirmar?`)
        vitorDaudt = vitorDaudt + 1
    } else if (candidatoUm == 33) {
        nomeDoCandidato.innerText = `Pedro`
        fotoDoCandidato.innerHTML = `<img src="https://s2-g1.glbimg.com/I62tJe3j9sHSQ7rpDwX4GR8buQQ=/65x65/smart/https://s.glbimg.com/jo/el/2024/candidatos/fotos/mg/41386/FMG130002230569_div.jpg" width="100" alt="Candidato Romilson da Rádio">`
        a = prompt(`Confirmar?`)
        vitorDauf = vitorDauf + 1
    } else if (candidatoUm == 44) {
        nomeDoCandidato.innerText = `Luís`
        fotoDoCandidato.innerHTML = `<img src="https://s2-g1.glbimg.com/QZxnUOzNJPw2O_-DwP5oDOOg7IQ=/65x65/smart/https://s.glbimg.com/jo/el/2024/candidatos/fotos/mg/41386/FMG130002108450_div.jpg" width="100" alt="Candidato Domingo Martins">`
        a = prompt(`Confirmar?`)
        vitorDauder = vitorDauder + 1
    } else {
        alert(`Voto nulo`)
        a = prompt(`Confirmar?`)
        nulo = nulo + 1
    }
 
    console.log(`vitor: ${vitor} votos\nJoão: ${vitorDaudt} votos\nPedro: ${vitorDauf} votos\nLuís: ${vitorDauder} votos`)
})