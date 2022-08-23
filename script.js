let nroImg = 0
let imgs = ["img/tree.jpg", "img/mountain.jpg", "img/wheat.jpg"]
let secs = 3
document.getElementById("secAdviser").innerHTML = "(automático cada 3 segundos)"

const carousel = () => {
    document.getElementById("carousel").style.backgroundImage = `url(${imgs[nroImg]})`
    nroImg ++
    if (nroImg === imgs.length) {
        nroImg = 0
    }
    setTimeout(carousel, secs * 1000) 
}
carousel()

const addSec = (secAdviser) => {
    secs ++
    secAdviser.innerHTML = `(automático cada ${secs} segundos)`
}

const resSec = (secAdviser) => {
    if (secs > 1) {   
        secs --
        secAdviser.innerHTML = `(automático cada ${secs} segundos)`
    }
}