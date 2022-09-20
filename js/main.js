let burger = document.querySelector('#burger');
let nav = document.querySelector('#nav');
let infoToggler = document.querySelector('#info-toggler');
let info = document.querySelector('#info');
burger.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});
infoToggler.addEventListener('click', ()=>{
    info.classList.toggle('active');
});