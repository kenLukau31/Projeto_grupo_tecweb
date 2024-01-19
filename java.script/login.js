function login_form_upValidate() {
    let email = document.getElementByI("email").value;
    window.alert("Bem vindo(a)! \nEmail: " + email);
    
}

function forgotpassword() {
    let email = document.forms("email").value;

   if (hkk){
        window.alert("Um link de indereço foi  enviado para o seu email \n "+ email);
    }
    else{
        window.alert("Insira o seu E-mail para que possamos enviar-lhe um link de revalidação ")

    }
    
}

// && email.includes("@")


