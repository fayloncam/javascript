let num = document.querySelector('input#num')
let lista = document.querySelector('select#mostranum')
let res = document.querySelector('div#resultado')
let valores = []

function adicionar() {
    if (eNumero(num.value) && !emLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML =''


    }
    else {
        window.alert('Valor inválido ou já adicionado na lista.')
    }
    num.value = ''
    num.focus()
}

function eNumero (n){
if (Number(n) >=1 && Number(n) <= 100){
    return true
} else {
    return false
}
}

function emLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores!')
    } else {
        valores.sort()
        let total = valores.length
        let soma = Number(0)
        let media = Number(0)

        for (let pos in valores){
            soma += valores[pos]
        }
        
        media = soma / (valores.length)

                
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros`
        res.innerHTML += `<p>O menor numero é ${valores[0]}`
        res.innerHTML += `<p>O maior numero é ${valores[(total-1)]}`
        res.innerHTML += `<p>A soma de todos os elementos é ${soma}`
        res.innerHTML += `<p>A média entre dos valores é ${media}`



    }
}