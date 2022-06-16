

function calcular(){
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#tabuada')

    if (num.value.length == 0){
    window.alert('Digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c<=10; c++){
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }

}