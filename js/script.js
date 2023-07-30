let header = document.getElementById('cabecera')
window.addEventListener('scroll', ()=> {
    let scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = 'transparent'
        header.style.boxShadow = '0px 0px 10px 4px black'
    } else{
        header.style.backgroundColor = 'transparent'

    }
})
