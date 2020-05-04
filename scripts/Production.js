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
