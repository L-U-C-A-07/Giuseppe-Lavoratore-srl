// !! VALE ANCHE PER LE PAGINE DEI SERVIZI !!

// Black Cover
window.addEventListener("scroll", () => {
    let scr = window.scrollY;
    let BC = document.getElementById("BlackCover");
    BC.style.opacity = Math.round((scr / 400) * 10) / 10;
})