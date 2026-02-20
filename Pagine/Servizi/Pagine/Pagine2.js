var ImgZoom = document.getElementById("ImgZoom");
let h = document.querySelector("html");
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
let ToChange = document.getElementById("imgChild");
var Curr
var len
var sez
var cant

function OpenImg(Sezione, Cantiere, n) {
    Curr = 1;
    len = n;
    sez = Sezione
    cant = Cantiere
    let pathBase = `../../../../Images/SV/${sez}/${cant}/${Curr}`;
    let img = new Image();
    img.onload = function() {
        // Se la trova con .jpg, la applica
        ToChange.style.backgroundImage = `url(${pathBase}.jpg)`;
    };
    img.onerror = function() {
        // Se .jpg fallisce, prova con .JPG
        ToChange.style.backgroundImage = `url(${pathBase}.JPG)`;
    };
    img.src = `${pathBase}.jpg`; // Avvia il primo tentativo
    document.getElementById("moveL").style.opacity = ".2";
    document.getElementById("moveL").classList.remove("Pointer");
    document.getElementById("moveR").style.opacity = "1";
    document.getElementById("moveR").classList.add("Pointer");
    ImgZoom.style.display = "block";
    let h = document.querySelector("html");
    h.style.overflowY = "hidden";
}

function MoveL() {
    if (Curr != 1) {
        let pathBase = `../../../../Images/SV/${sez}/${cant}/${Curr - 1}`;
        let img = new Image();
        img.onload = function() {
            // Se la trova con .jpg, la applica
            ToChange.style.backgroundImage = `url(${pathBase}.jpg)`;
        };
        img.onerror = function() {
            // Se .jpg fallisce, prova con .JPG
            ToChange.style.backgroundImage = `url(${pathBase}.JPG)`;
        };
        img.src = `${pathBase}.jpg`; // Avvia il primo tentativo
        if (Curr == 2) {
            document.getElementById("moveL").style.opacity = ".2";
            document.getElementById("moveL").classList.remove("Pointer");
        }
        Curr -= 1;
        document.getElementById("moveR").style.opacity = "1";
        document.getElementById("moveR").classList.add("Pointer");
    }
 }

function MoveR() {
    if (Curr != len) {
        let pathBase = `../../../../Images/SV/${sez}/${cant}/${Curr + 1}`;
        let img = new Image();
        img.onload = function() {
            // Se la trova con .jpg, la applica
            ToChange.style.backgroundImage = `url(${pathBase}.jpg)`;
        };
        img.onerror = function() {
            // Se .jpg fallisce, prova con .JPG
            ToChange.style.backgroundImage = `url(${pathBase}.JPG)`;
        };
        img.src = `${pathBase}.jpg`; // Avvia il primo tentativo
        if (Curr == len - 1) {
            document.getElementById("moveR").style.opacity = ".2";
            document.getElementById("moveR").classList.remove("Pointer");
        }
        Curr += 1;
        document.getElementById("moveL").style.opacity = "1";
        document.getElementById("moveL").classList.add("Pointer");
    }
}

function CloseImg() {
    ImgZoom.style.display = "none";
    h.style.overflowY = "scroll";
}