console.log("JS IS CONNECTED");
document.addEventListener("DOMContentLoaded", function () {

    const modeBtn = document.getElementById("themeToggle");

    if (modeBtn) {
        modeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark");
        });
    }

});