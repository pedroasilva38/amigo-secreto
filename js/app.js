const listaSorteio = document.getElementById('lista-sorteio')
const listaAmigos = document.getElementById('lista-amigos')
let amigos = []

function adicionar() {
    const nomeAmigo = document.getElementById('nome-amigo').value.trim()
    
    if (!nomeAmigo) {
        return
    }
    
    if (!(amigos.includes(nomeAmigo))) {
        if (listaAmigos.textContent == '') {
            listaAmigos.textContent = nomeAmigo
        } else {
            listaAmigos.textContent += `, ${nomeAmigo}`
        }
    }
    amigos.push(nomeAmigo)
    document.getElementById('nome-amigo').value = ''
}

function sortear() {
    document.getElementById('lista-sorteio').textContent = ''
    let amigosSorteados = []
    let max = amigos.length
    
    for (i=0;i<max;i++) {
        let amigoSorteado = Math.floor(Math.random() * max)
        while (amigosSorteados.includes(amigos[amigoSorteado])) {
            amigoSorteado = Math.floor(Math.random() * max)
        }
        amigosSorteados.push(amigos[amigoSorteado])
        listaSorteio.innerHTML += `${amigos[i]} -> ${amigos[amigoSorteado]}<br/>`

    }
}

function reiniciar() {
    document.getElementById('nome-amigo').value = ''
    document.getElementById('lista-amigos').textContent = ''
    document.getElementById('lista-sorteio').textContent = ''
    amigos = []   
}