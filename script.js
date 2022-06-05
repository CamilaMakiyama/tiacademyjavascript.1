let mamaoPapaia = document.getElementById('mamaoPapaia')
let laranja = document.getElementById('laranja')
let manga = document.getElementById('manga')
let melao = document.getElementById('melao')
let melancia = document.getElementById('melancia')
let frutas = [['Mamão Papaia', 2], ['Laranja', 1], ['Manga', 3], ['Melão', 2.75], ['Melancia', 5]]
let cesta = []
let c = 0

function selecionar(n){
    if(cesta.indexOf(frutas[n][0]) == -1){
        let cestaDoCliente = document.getElementById('cestaDoCliente')
        let mostraTotalCompra = document.getElementById('mostraTotalCompra')
        c += frutas[n][1]
        cesta.push(frutas[n][0])
        let li = document.createElement('li')
        li.innerText = `${frutas[n][0]}`
        cestaDoCliente.appendChild(li)
        num = Number(frutas[n][1])
        mostraTotalCompra.value = `${c}`
    }else{
        window.alert('Item já adicionado, escolha outro.')
    }
}
