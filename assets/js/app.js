const openNav = document.getElementById("open-navbar-js");
const closeNav = document.getElementById("close-navbar-js");
const navBar =  document.getElementById("navBar-js")


openNav.addEventListener("click", ()=>{
    navBar.classList.add("open-nav");
})

closeNav.addEventListener("click", ()=>{
    navBar.classList.remove("open-nav");
})