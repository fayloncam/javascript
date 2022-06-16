function contar(){
    let ini = document.querySelector('input#inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if(i<f){
            for(let c = i; c <= f; c+=p){
            res.innerHTML += `${c} \u{1f449}`} 
        } else{
            for(let c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{1f448}`} 
        }
        
    }
}