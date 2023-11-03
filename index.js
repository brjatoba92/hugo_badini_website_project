function onClickScroll(id){
    document.getElementById(id).scrollIntoView()
}

function onClickLink(url){
    window.open(url)
}

const btnMobile = document.querySelector('btn-mobile')


const nav = document.getElementById('nav')


btnMobile.addEventListener('click', () =>{
    nav.classList.add('active')
})