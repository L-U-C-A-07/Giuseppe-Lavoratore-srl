console.log("v 0.2.8");
// Navigation Menu Icon Change
let ChangeIcon = function(icon) {
    icon.classList.toggle("fa-xmark");
}

let cnt = document.getElementById("Container");
window.onscroll = () => {
    let scr = window.scrollY;
    let head = document.getElementById("Header");
    let BC = document.getElementById("BlackCover");
    BC.style.opacity = scr / 600;
    if (scr >= 550) {
        head.style.position = "fixed";
        head.style.top = "0px";
        head.style.backgroundColor = "var(--C4)";
        head.style.boxShadow = "var(--SoftShadow)";
    }
    else if (scr < 550 && scr > 70) {
        head.style.top = "calc(-1 * var(--Header))";
    }
    else {
        head.style.position = "absolute";
        head.style.top = "0px";
        head.style.backgroundColor = "#ffffff00";
        head.style.boxShadow = "none";
    }
}