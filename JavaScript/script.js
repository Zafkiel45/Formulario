var nome = document.getElementById('nome');
var email = document.getElementById('email');
var sobre = document.getElementById('sobre');
var botão = document.getElementById('button');

botão.addEventListener('click' , enviar);

function enviar(){
    var box = document.getElementsById('checked');

    if(box.checked) {
        alert('MARCOU');
    } 
}
