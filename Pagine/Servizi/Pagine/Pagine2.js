var ImgZoom = document.getElementById("ImgZoom");
let h = document.querySelector("html");

function OpenImg(Sezione, Cantiere, n, img) {
    const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
    ImgZoom.style.display = "block";
    let h = document.querySelector("html");
    h.style.overflowY = "hidden";
    console.log("Images/SV/" + Sezione + "/" + Cantiere + "/" + img + ".JPG");
}

function CloseImg() {
    ImgZoom.style.display = "none";
    h.style.overflowY = "scroll";
}