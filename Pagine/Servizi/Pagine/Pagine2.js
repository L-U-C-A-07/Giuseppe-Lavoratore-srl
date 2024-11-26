var ImgZoom = document.getElementById("ImgZoom");
let h = document.querySelector("html");
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
let ToChange = document.getElementById("imgChild");
var Position
var Curr
var len

function OpenImg(Sezione, Cantiere, n, img) {
    Curr = img;
    len = n - 1;
    ToChange.style.backgroundImage = 'url(../../../../Images/SV/' + Sezione + '/' + Cantiere + '/' + img + '.JPG)';
    ImgZoom.style.display = "block";
    let h = document.querySelector("html");
    h.style.overflowY = "hidden";
    if (abc.indexOf(img) == 0) {
        document.getElementById("moveL").style.opacity = ".2";
        document.getElementById("moveL").classList.remove("Pointer");
        document.getElementById("moveR").style.opacity = "1";
        document.getElementById("moveR").classList.add("Pointer");
        Position = "first";
    }
    else if (abc.indexOf(img) == n -1) {
        document.getElementById("moveR").style.opacity = ".2";
        document.getElementById("moveR").classList.remove("Pointer");
        document.getElementById("moveL").style.opacity = "1";
        document.getElementById("moveL").classList.add("Pointer");
        Position = "last";
    }
    else {
        document.getElementById("moveL").style.opacity = "1";
        document.getElementById("moveL").classList.add("Pointer");
        document.getElementById("moveR").style.opacity = "1";
        document.getElementById("moveR").classList.add("Pointer");
        Position = "";
    }
}

function MoveL() {
    if (Position != "first") {
        ToChange.style.backgroundImage = ToChange.style.backgroundImage.slice(0, -7) + abc[abc.indexOf(Curr) - 1] + '.JPG")';
        if (Curr == "b") {
            document.getElementById("moveL").style.opacity = ".2";
            document.getElementById("moveL").classList.remove("Pointer");
            Position = "first";
        }
        else {
            Position = "";
        }
        Curr = abc[abc.indexOf(Curr) - 1];
        document.getElementById("moveR").style.opacity = "1";
        document.getElementById("moveR").classList.add("Pointer");
    }
 }

function MoveR() {
    if (Position != "last") {
        ToChange.style.backgroundImage = ToChange.style.backgroundImage.slice(0, -7) + abc[abc.indexOf(Curr) + 1] + '.JPG")';
        if (Curr == abc[len - 1]) {
            document.getElementById("moveR").style.opacity = ".2";
            document.getElementById("moveR").classList.remove("Pointer");
            Position = "last";
        }
        else {
            Position = "";
        }
        Curr = abc[abc.indexOf(Curr) + 1];
        document.getElementById("moveL").style.opacity = "1";
        document.getElementById("moveL").classList.add("Pointer");
    }
}

function CloseImg() {
    ImgZoom.style.display = "none";
    h.style.overflowY = "scroll";
}