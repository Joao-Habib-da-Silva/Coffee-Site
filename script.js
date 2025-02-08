var navbar = window.document.getElementById("navbar")
function Click() {
    navbar.classList.toggle("open")
}


var html = window.document.documentElement
    
var  ball= window.document.getElementById("ball")
function Theme() {
    ball.classList.toggle("darktheme")
    html.classList.toggle("darktheme")
    if(html.classList.contains("darktheme")) {
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.setItem("theme", "light")
    }
}
var transition = window.document.getElementById("transition")
window.onload = function() {
    var theme = window.localStorage.getItem("theme")
   
    if (theme === "dark") {
        ball.classList.add("darktheme")
        html.classList.add("darktheme")
    }
    else if (theme === "light") {
        ball.classList.remove("darktheme")
        html.classList.remove("darktheme")
    }
}