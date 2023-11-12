const text_error = document.querySelectorAll('.invalid');
const text_name = document.querySelector('#nome');
const email = document.querySelector('#email');
const more_info = document.querySelector('#sobre');
const termo_uso = document.querySelector('#checked');
const input = document.querySelectorAll('.input');
const button = document.querySelector('#button');
const form = document.querySelector('#form');

//there are a possible way of abstract this code

input.forEach(function(element){
    element.addEventListener('input', function(){
        // input name
        if(input[0].value.length < 4 || !input[0].checkValidity()){
            erro(0);
            input[0].classList.add('erro')
        } else {
            valid(0);
            input[0].classList.remove('erro')
        }
        // input email
        if(!input[1].checkValidity()){
            erro(1)
        } else {
            valid(1)
        }
        // input textarea
        if(input[2].value.length < 4){
            erro(2);
        }else {
            valid(2);
        }
        // input checkbox
        if(!input[3].checked){
            erro(3);
        } else {
            valid(3);
        }
    })
});
button.addEventListener('click', function(){
    for(let verifique = 0; verifique < input.length; verifique++){
        if(input[verifique].classList.contains('erro')){
            erro(verifique);
        }
    }
    if(!input[verifique].classList.contains('erro')){
        form.submit()
    }
})
function erro(idx){
    text_error[idx].style.display = 'block'
} 
function valid(idx){
    text_error[idx].style.display = 'none'
}

