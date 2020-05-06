function setActive(element) {
  var allLinks = document.getElementsByClassName("nav-link active");
  var length = allLinks.length;

  if (allLinks.length > 0) {
    for (var i = 0; i < length; i++) {
      allLinks[0].className = "nav-link";
    }
  }

  element.className = "nav-link active";
}


//--------------------STOCK------------------------

function showStock(element) {
  hideStock();

  var stock = document.getElementById(element.className);
  stock.style.display = "block";
}

function hideStock() {
  var tables = document.getElementsByClassName("stock");

  for (var i = 0; i < tables.length; i++) {
    document.getElementById(tables[i].id).style.display = "none";
  }
}