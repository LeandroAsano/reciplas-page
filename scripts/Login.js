function loginUser() {
  var user = document.getElementById("usuarioInput");
  var loginButton = document.getElementById("loginButton");

  switch (user.value) {
    case "Ventas":
      loginButton.setAttribute("href", "/view/Ventas/Home.html");
      break;
    case "Produccion":
      loginButton.setAttribute("href", "/view/Produccion/Home.html");
      break;
    case "Produccion":
      loginButton.setAttribute("href", "/view/Administracion/Home.html");
      break;
  }
}
