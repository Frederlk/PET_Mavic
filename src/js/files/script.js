// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

$(document).ready(function () {
    window.onload = function () {
        if ($(".screen__image")) {
            var rellax = new Rellax(".screen__image", {
                center: true,
            });
        }
        //main-slider
        //========================================================================================================================================================
        $(".slider-what__slick").slick({
            nextArrow: $(".screen-what .slider-what__nav-item_next"),
            prevArrow: $(".screen-what .slider-what__nav-item_prev"),
            zIndex: 10,
            speed: 800,
            fade: true,
        });
    };
});
