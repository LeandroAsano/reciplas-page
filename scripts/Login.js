function loginUser() {
  var user = document.getElementById("usuarioInput");
  var loginButton = document.getElementById("loginButton");

  switch (user.value) {
    case "Ventas":
      loginButton.setAttribute("href", "../view/Ventas.html");
      break;
    case "Produccion":
      loginButton.setAttribute("href", "../view/Produccion.html");
      break;
    case "Administracion":
      loginButton.setAttribute("href", "../view/Administracion.html");
      break;
    case "Clientes":
      loginButton.setAttribute("href", "../view/Clientes.html");
      break;
  }
}
