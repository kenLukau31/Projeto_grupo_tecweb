function login_form_Validate() {
    // aceder ao valor do elemento html com id="email"
    let email = document.getElementById("email").value; 
    // msg de alerta
    window.alert("Bem vindo(a)! \nEmail: " + email);
    
}

function forgotpassword() {
    let email = document.getElementById("email").value;
    // se houver algum endereço de email no input 
   if (email = document.getElementById("email").value){
        window.alert("Um link de endereço foi  enviado para o seu email \n "+ email);
    }
    // se não for entroduzido nenhum endereço de email no input 
    else{
        window.alert("Insira o seu E-mail para que possamos enviar-lhe um link de revalidação ")

    }
    
}




