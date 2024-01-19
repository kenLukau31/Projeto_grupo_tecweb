
function sign_form_upValidate(){
    // aceder ao valor dos elementos html com id="Fname" e "Lname"
    let Fname = document.getElementById('Fname').value;
    let Lname = document.getElementById('Lname').value;
       // msg de alerta e concatenação do username
    window.alert("Bem vindo(a)! \n" + Fname + " " + Lname);

}