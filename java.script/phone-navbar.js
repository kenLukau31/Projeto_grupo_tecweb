function phone_navbar() {
    var x = document.getElementById("phone-links");
    if (x.style.display === "block") {
      x.style.display = "none"; //Links escondidos
    } else {
      x.style.display = "block"; //Links visíveis
}
}