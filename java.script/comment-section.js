
let comments = [];

//Função para adicionar um comentário
function add_comment(event) { //event é o form
    
    event.preventDefault(); //isto impede que a pág faça reload ao submeter o form
    const com_username = document.getElementById('com-username').value; //obter o input do nome do user
    const user_comment = document.getElementById('user-comment').value; //obter o input do comentário

    comments.push({com_username , comment: user_comment }); //adicionar o comentário à array 
    
    //Chamar a função
    show_comments();
    
    //Clear inputs
    document.getElementById('com-username').value = '';
    document.getElementById('user-comment').value = '';
}

//Função para mostrar os comentários
function show_comments() {
    const comment_container = document.getElementById('comment-container'); //obter a div para mostrar o comment
    comment_container.innerHTML = ''; //modificar a div no html para uma string vazia

    comments.forEach(comment => { //loop que vai iterar cada elemento em comments, e que vai executar para cada um a seguinte função
        const comment_element = document.createElement('div'); //criar uma nova div no html para mostrar o novo comentário
        comment_element.classList.add('comment-container'); //atribuir uma classe á div
        comment_element.innerHTML = `<strong>${comment.com_username}</strong><br>${comment.comment}`; //inserir o conteúdo na div nova
        comment_container.appendChild(comment_element); //adicionar o novo comment á div existente
    });
}

//Event listener para submeter o form
document.getElementById('comment-form').addEventListener('submit', add_comment);
