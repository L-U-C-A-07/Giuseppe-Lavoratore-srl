console.log("v 0.4.9");
// fatto zoom immagini spero
// creare pagina SV
// da aggiustare footer
// impostare link x immagini e servizi (anche nel footer)

// Navigation Menu Icon Change
let ChangeIcon = function(icon) {
    icon.classList.toggle("fa-xmark");
}

// Header Anim
let cnt = document.getElementById("Container");
window.addEventListener("scroll", () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page != "CO.html") {
        let scr = window.scrollY;
        let head = document.getElementById("Header");
        if (scr >= 400) {
            head.style.top = "0px";
            head.style.backgroundColor = "var(--C3)";
            head.style.boxShadow = "var(--SoftShadow)";
        }
        else if (scr < 400 && scr > 70) {
            head.style.top = "calc(-1 * var(--Header))";
        }
        else {
            head.style.top = "0px";
            head.style.backgroundColor = "#ffffff00";
            head.style.boxShadow = "none";
            head.style.top = -1 * scr + "px";
        }
    }
})