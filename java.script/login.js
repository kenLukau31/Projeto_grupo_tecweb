function login_form_upValidate() {
    let email = document.forms["login_form"]["email"].value;
   
    window.alert("Bem vindo(a)! \nEmail: " + email);
    
}

function forgotpassword() {
    let email = document.forms["login_form"]["email"].value;

   if (email){
        window.alert("Um link de indereço foi  enviado para o seu email \n "+ email);
    }
    else{
        window.alert("Insira o seu E-mail para que possamos enviar-lhe um link de revalidação ")

    }
    
}

// && email.includes("@")


