//---------------------SIDEBAR-----------------------------------
function showBar() {
  var chk = document.getElementById("check");
  var sidebarOpen = document.getElementById("sidebar-expanded");
  var sidebarHide = document.getElementById("sidebar-hide");
  var sidebarUserImg = document.getElementById("hideUserImg");

  sidebarUserImg.style.transition = "all .5s";

  sidebarOpen.style.left = "0px";
  sidebarHide.style.transition = "all .5s ease";
  sidebarHide.style.visibility = "hidden";
}

function hideBar() {
  var chk = document.getElementById("check");
  var sidebarOpen = document.getElementById("sidebar-expanded");
  var sidebarHide = document.getElementById("sidebar-hide");
  var sidebarUserImg = document.getElementById("hideUserImg");

  sidebarUserImg.style.transition = "all .5s";

  sidebarOpen.style.left = "-250px";
  sidebarHide.style.visibility = "visible";
  //sidebarUserImg.style.left = "15px";
}

function selectItem(element) {
  var allIcons = document.getElementsByClassName("selected");

  if(allIcons.length>0){
    for (var i = 0; i < 2; i++) {
      var activeIconClass = allIcons[0].className;
    
      iconClass = activeIconClass.replace("selected", "noSelected");
      allIcons[0].className = iconClass;
    }
  }

  var icons = document.getElementsByClassName(element.className);

  for (var i = 0; i < 2; i++) {
    var iconClass = icons[0].className;
  
    iconClass = iconClass.replace("noSelected", "selected");
    icons[0].className = iconClass;
  }

}

/**
 * function showSideBar() {
  var chk = document.getElementById("check");
  var sidebarOpen = document.getElementById("sidebar-expanded");
  var sidebarHide = document.getElementById("sidebar-hide");
  var sidebarUserImg = document.getElementById("hideUserImg");

  sidebarUserImg.style.transition = "all .5s";

  //expanded
  if (chk.checked == true) {
    sidebarOpen.style.left = "0px";
    sidebarHide.style.transition = "all .5s ease";
    sidebarHide.style.visibility = "hidden";
    //sidebarUserImg.style.left = "15px";
    //sidebarUserImg.style.visibility = "hidden";

    //hidden
  } else {
    sidebarOpen.style.left = "-250px";
    sidebarHide.style.visibility = "visible";
    //sidebarUserImg.style.left = "15px";
  }
}
 */
