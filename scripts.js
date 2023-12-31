//BOOK NOW

let current_tab = 0; //Primeira tab é 0
show_tab(current_tab); // Mostrar a tab atual

function show_tab(n){
    //Esta função vai mostrar cada tab do form
    let x = document.getElementsByClassName('tab');
    x[n].style.display = 'block';
    //Botões de 'Next' e 'Previous'
    if ( n == 0 ){
        //Se o utilizador tiver na 1º parte do formulário, o botão de voltar não será mostrado
        document.getElementById('prevBtn').style.display = 'none';
    } else{
        document.getElementById('prevBtn').style.display = 'inline';
    }
    if ( n == (x.length - 1)){
        //Se o utilizador tiver na última parte do formulário, aparecerá o botão de 'Next' passará a ser de 'Submit'
        document.getElementById('nextBtn').innerHTML = 'Submit';
    } else {
        document.getElementById('nextBtn').innerHTML = 'Next';
    }
}

function nextPrev(n){
    //Esta função ajuda a inserir a tab correta a mostrar em cada parte do formulário
    let x = document.getElementsByClassName('tab');
    //Sair da função se algum input for inválido
    if (n == 1 && !validate_form()){
        return false;
    }
    //Esconder a tab atual
    x[current_tab].style.display = 'none';
    //Ir para á frente ou para trás
    current_tab = current_tab + n;
    //Se o utilizador chegou ao fim do formulário
    if (current_tab >= x.length){
        //O formulário é submetido
        document.getElementById('book-form').submit();
        return false;
    }
    //Senão, vai continuar a mostrar a tab atual
    show_tab(current_tab);
}

function validate_form(){
    //Esta função irá buscar todas as informações inseridas pelo utilizador e validá-las
    let x, y, i, valid = true;
    x = document.getElementsByClassName('tab');
    y = x[current_tab].getElementsByTagName('input');
    for (i = 0; i < y.length; i++){
        //Loop for que vai passar por todos os inputs e verificar se estão vazios e/ou inválidos
        if (y[i].value == ''){ //Se um input tiver vazio
            y[i].className += 'invalid';
            window.alert('Error')
            return invalid
            //Fica inválido
        }
    }
    return valid
}

function update_progress_bar(){
    
}