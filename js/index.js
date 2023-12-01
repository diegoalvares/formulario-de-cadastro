const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const btn = document.getElementById('btn-submit');
const senha = document.getElementById('senha');
const exc_nome = document.getElementById('exc_nome')
const exc_sobrenome = document.getElementById('exc_sobrenome')


function addEventInElements(element){
    element.addEventListener ('blur', function(){
        if(!element.value || element.value.lenght < 4){
            exc_nome.style.display = 'block'
        }
        else{
            exc_nome.style.display = 'none'
        }
    })
}

addEventInElements(nome);
addEventInElements(sobrenome);
