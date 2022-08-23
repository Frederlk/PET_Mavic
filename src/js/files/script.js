import Rellax from "rellax";

window.onload = function () {
    if (document.querySelector(".screen__image-ibg")) {
        new Rellax(".screen__image-ibg", {
            center: true,
        });
    }
};
