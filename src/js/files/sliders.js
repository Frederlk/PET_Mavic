import Swiper, { Navigation, EffectFade } from "swiper";
import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".slider-what__swiper")) {
        new Swiper(".slider-what__swiper", {
            modules: [Navigation, EffectFade],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            effect: "fade",
            navigation: {
                prevEl: ".what .slider-what__item_prev",
                nextEl: ".what .slider-what__item_next",
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
