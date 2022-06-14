function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours() 

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12) {
//bom dia #D6B09D
img.src = 'imagem/manha.png'
document.body.style.background = '#D6B09D'
} else if (hora >= 12 && hora < 18) {
//boa tarde #999276
img.src = 'imagem/tarde.png'
document.body.style.background = '#999276'
} else {
    //boa noite #042024
    img.src = 'imagem/noite.png'
    document.body.style.background = '#042024'
}
}