const text_error = document.querySelectorAll('.invalid');
const text_name = document.querySelector('#nome');
const email = document.querySelector('#email');
const more_info = document.querySelector('#sobre');
const termo_uso = document.querySelector('#checked');
const input = document.querySelectorAll('.input');


input.forEach(function(element){
    element.addEventListener('input', function(){
        // input name
        if(input[0].value.length < 4){
            erro(0);
        } else {
            valid(0);
        }
        // input textarea
        if(input[1].value.length < 4){
            erro(1);
        }else {
            valid(1);
        }
    })
});

function erro(idx){
    text_error[idx].style.display = 'block'
} 

function valid(){
    text_error[idx].style.display = 'none'
}

