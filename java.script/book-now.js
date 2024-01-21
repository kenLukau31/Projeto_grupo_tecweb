//BOOK NOW

let current_tab = 0; //Primeira tab é 0
show_tab(current_tab); // Mostrar a tab atual

function show_tab(numTab){
    //Esta função vai mostrar cada tab do form
    let tab = document.getElementsByClassName('tab'); // Variável tab representa os divs com class "tab"
    tab[numTab].style.display = 'block';
    //Botões de 'Next' e 'Previous'
    if ( numTab == 0 ){
        //Se o utilizador tiver na 1º parte do formulário, o botão de "Go Back" não será mostrado
        document.getElementById('prevBtn').style.display = 'none';
    } else {
        //Senão, o botão aparece
        document.getElementById('prevBtn').style.display = 'inline';
    }
    if ( numTab == (tab.length - 1)){
        //Se o utilizador tiver na última parte do formulário, o botão de "Next" passará a dizer "Submit" para submeter o formulário
        document.getElementById('nextBtn').innerHTML = 'Submit';
    } else {
        document.getElementById('nextBtn').innerHTML = 'Next';
    }
}

function nextPrev(numTab){
    //Esta função ajuda a inserir a tab correta a mostrar em cada parte do formulário
    let tab = document.getElementsByClassName('tab');
    //Sair da função se algum input for inválido
    if (numTab == 1 && validate_form() == false){
        return false;
    }
    //Esconder a tab atual
    tab[current_tab].style.display = 'none';
    //Ir para á frente ou para trás
    current_tab = current_tab + numTab;
    //Se o utilizador chegou ao fim do formulário
    if (current_tab >= tab.length){
        //O formulário é submetido
        document.getElementById('book-form').submit();
        window.alert('Booking Successful!');
        window.location.href = '/pages/book.html';
        return false;
    }
    //Senão, vai chamar a função "show_tab" para mostrar a seguinte tab 
    show_tab(current_tab);
}

function validate_form(){
    //Esta função irá buscar todas as informações inseridas pelo utilizador e validá-las
    let tab = document.getElementsByClassName('tab');
    let input_info = tab[current_tab].getElementsByTagName('input');
    let num_Pessoas = document.getElementById('adults').value + document.getElementById('children').value + document.getElementById('infants').value;
    let data1 = String(document.getElementsByName('start_date').value);
    let data2 = String(document.getElementsByName('end_date').value);
    
    for ( i = 0; i <= 5; i++){
    if (num_Pessoas == 0){
        window.alert('You need to have at least 1 person to book a tent!');
        return false; // Fica inválido
    } 

    if (data1 == "dd/mm/aaaa" || data2 == "dd/mm/aaaa"){
        window.alert('You need to choose for how long you are going to book your tent!');
        return false;
    }

    for (j = 0; j < input_info.length; j++){
        // Loop for que vai passar por todos os inputs e verificar se estão vazios e/ou inválidos
            if (input_info[i].value == ''){ // Se um input tiver vazio
                return false;
            }
        }
        return true
    }
}
