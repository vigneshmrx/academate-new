let copyrightArea = document.getElementsByClassName("copyright-area")[0];

copyrightArea.innerHTML = "Copyright @ " + new Date().getFullYear() + ", <span class='academate'>AcadeMate</span>. All rights reserved.";

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});