window.addEventListener('scroll', () => {

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    const progress = window.scrollY / maxScroll;

    document.querySelector('.overlay').style.opacity = progress;

});

const url = window.location.href
const urlParams = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", () =>{
    if(urlParams.get('animacao') && (urlParams.get('animacao') == 1)){
        
    }
})