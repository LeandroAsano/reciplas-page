function showTable(element) {
  hideTables();

  var tabla = document.getElementById(element.className);
  tabla.style.display = "block";
}

function hideTables() {
  var tables = document.getElementsByClassName("tabla");

  for (var i = 0; i < tables.length; i++) {
    document.getElementById(tables[i].id).style.display = "none";
  }
}
