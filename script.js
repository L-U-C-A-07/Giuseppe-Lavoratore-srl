window.addEventListener("scroll", () => {
    let scr = window.scrollY;
    let BC = document.getElementById("BlackCover");
    BC.style.opacity = Math.round((scr / 400) * 10) / 10;
})

// Import htmlComm
// const footer = document.getElementById("footer");
// fetch("/htmlComm/footer.html")
// .then(res => res.text())
// .then(data => {
//     console.log("data:", data);
//     footer.innerHTML = footer.innerHTML + data;
//     console.log(footer);
// })