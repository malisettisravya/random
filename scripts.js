
document.addEventListener("DOMContentLoaded", function () {

    const modeBtn = document.getElementById("modeBtn");
    const contactBtn = document.getElementById("contactBtn");

    if (modeBtn) {
        modeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark");
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            alert("Thanks for visiting my portfolio");
        });
    }

});
