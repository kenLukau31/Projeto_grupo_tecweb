//BOOK NOW

let current_tab = 0; //Primeira tab é 0
show_tab(current_tab); // Mostrar a tab atual

function show_tab(numTab){
    //Esta função vai mostrar cada tab do form
    let x = document.getElementsByClassName('tab');
    x[numTab].style.display = 'block';
    //Botões de 'Next' e 'Previous'
    if ( numTab == 0 ){
        //Se o utilizador tiver na 1º parte do formulário, o botão de voltar não será mostrado
        document.getElementById('prevBtn').style.display = 'none';
    } else{
        document.getElementById('prevBtn').style.display = 'inline';
    }
    if ( numTab == (x.length - 1)){
        //Se o utilizador tiver na última parte do formulário, aparecerá o botão de 'Next' passará a ser de 'Submit'
        document.getElementById('nextBtn').innerHTML = 'Submit';
    } else {
        document.getElementById('nextBtn').innerHTML = 'Next';
    }
}

function nextPrev(numTab){
    //Esta função ajuda a inserir a tab correta a mostrar em cada parte do formulário
    let x = document.getElementsByClassName('tab');
    //Sair da função se algum input for inválido
    if (numTab == 1 && !validate_form()){
        return false;
    }
    //Esconder a tab atual
    x[current_tab].style.display = 'none';
    //Ir para á frente ou para trás
    current_tab = current_tab + numTab;
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
            return invalid
            //Fica inválido
        }
    }
    return valid
}