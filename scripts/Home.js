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

function deselectIcons() {
  var allIcons = document.getElementsByClassName("selected");

  if (allIcons.length > 0) {
    for (var i = 0; i < 2; i++) {
      var activeIconClass = allIcons[0].className;

      iconClass = activeIconClass.replace("selected", "noSelected");
      allIcons[0].className = iconClass;
    }
  }
}

/* SELECT BOTH ICONS FROM SIDEBAR */
function selectIcon(element) {
  var icons = document.getElementsByClassName(element.className);
  
  for (var i = 0; i < 2; i++) {
    var iconClass = icons[0].className;

    iconClass = iconClass.replace("noSelected", "selected");
    icons[0].className = iconClass;
  }
}

function hideTabs() {
  var tabs = document.getElementsByClassName("tab");

  

  for (var i = 0; i < (tabs.length/2); i++) {
    var tabId = getLastWord(tabs[i].className);

    if (tabId=="consultarStockProd"){
      var matTab = document.getElementById("consultarStockMateriales");
      matTab.style.display = "none";
    }
    
    var tabDiv = document.getElementById(tabId);

    tabDiv.style.display = "none";
  }
}

function getLastWord(words) {
  var n = words.split(" ");
  return n[n.length - 1];
}

function selectTab(element) {
  deselectIcons();
  selectIcon(element);
  hideTabs();

  var tabId = getLastWord(element.className);
  var tab = (document.getElementById(tabId).style.display = "block");
}



//--------------------------------------REPORTES------------------------------------

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