const hamburgermenu = document.querySelector(".hamburger-menu");
const burgeropen = document.getElementById("burger-open");
const burgerexit = document.querySelector(".burger-exit");
const blockdisplay = document.querySelector(".display-block");
const opendisplay = document.getElementById("display-active");
const header = document.querySelector(".header");

function openburger(){
    hamburgermenu.style.display = "block";
    blockdisplay.style.display = "block";
    header.style.display = "none";
}

burgeropen.addEventListener("click", openburger)

function exitburger(){
    hamburgermenu.style.display = "none";
}
blockdisplay.addEventListener("click", exitburger)

burgerexit.addEventListener("click", exitburger)
function exitburger(){
    blockdisplay.style.display = "none";
    header.style.display = "block";
    hamburgermenu.style.display = "none";

}