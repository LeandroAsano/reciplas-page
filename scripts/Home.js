
function showSideBar(){

    var chk = document.getElementById("check")
    var sidebarOpen = document.getElementById("sidebar-expanded")
    var sidebarHide = document.getElementById("sidebar-hide")
    var sidebarUserImg = document.getElementById("hideUserImg")

    sidebarUserImg.style.transition = "all .5s";

        //expanded
    if (chk.checked == true) {
        sidebarOpen.style.left = "0px";
        sidebarHide.style.transition = "all .5s ease";
        sidebarHide.style.visibility = "hidden";
        //sidebarUserImg.style.left = "15px";
        sidebarUserImg.style.visibility = "hideden";

        //hidden
    } else {
        sidebarOpen.style.left = "-250px";
        sidebarHide.style.visibility = "visible";
        //sidebarUserImg.style.left = "15px";
        
    }

}