const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const sidebar = document.querySelector('#sidebar');
const body = document.querySelector('#corpo');
const section = document.querySelectorAll('main');

next.addEventListener('click', function(){
    sidebar.style.left = '0'
    body.style.overflow = 'hidden'
    section[0].style.filter = 'blur(4px)'
})
prev.addEventListener('click', function(){
    sidebar.style.left = '-100%'
    body.style.overflow = ''
    section[0].style.filter = ''
})
section[0].addEventListener('click', function(){
    sidebar.style.left = '-100%'
    section[0].style.filter = ''
    body.style.overflow = ''
})