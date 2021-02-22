let menuButton = document.querySelector("#menuButton");
let menu = document.querySelector("#menu");
let overlayMenu = document.querySelector("#overlayMenu");
let isClicked = true;

function showHide(elem) {
    if (isClicked) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    };
}
menuButton.addEventListener("click", function () {
    isClicked = !isClicked;
    showHide(menu);
    showHide(overlayMenu)
}
)

menuButton.addEventListener("click", function () {
    isClicked = !isClicked;
    showHide(menu);
    showHide(overlayMenu)
}
)
