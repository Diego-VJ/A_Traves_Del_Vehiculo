
// Slider-Carrusel
const slider = document.querySelector("#slider");
let sliderSection =  document.querySelectorAll(".slider__section");
let sliderSectionLast =  sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function NextRight () {
    let sliderSectionFirts = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirts);
        slider.marginLeft = "-100%";
    }, 500);
}

function NextLeft () {
    let sliderSection =  document.querySelectorAll(".slider__section");
    let sliderSectionLast =  sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "100";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    NextRight();
});

btnLeft.addEventListener('click', function(){
    NextLeft();
});

setInterval(function(){
    NextRight();
}, 5000);