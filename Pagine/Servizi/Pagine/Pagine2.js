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
    try {
        ToChange.style.backgroundImage = 'url(../../../../Images/SV/' + sez + '/' + cant + '/1.jpg)';
    } catch(error) {
        ToChange.style.backgroundImage = 'url(../../../../Images/SV/' + sez + '/' + cant + '/1.JPG)';
    };
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
        try {
            ToChange.style.backgroundImage = 'url(../../../../Images/SV/' + sez + '/' + cant + '/' + String(Curr - 1) + '.jpg)';
        } catch (error) {
            ToChange.style.backgroundImage = 'url(../../../../Images/SV/' + sez + '/' + cant + '/' + String(Curr - 1) + '.JPG)';
        }
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
        try {
            ToChange.style.backgroundImage = 'url(../../../../Images/SV/' + sez + '/' + cant + '/' + String(Curr + 1) + '.jpg)';
        } catch (error) {
            ToChange.style.backgroundImage = 'url(../../../../Images/SV/' + sez + '/' + cant + '/' + String(Curr + 1) + '.JPG)';
        }
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