const slider=document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next(){
    let sliderSectionFirst =document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft ="-107%";
    slider3.style.marginLeft ="-107%";
    slider.style.transition = "all 0.5s";
    slider3.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeftt="-107%";
           
    }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft="0";
    slider.style.transition = "all 0.5s";

    setTimeout(function() {
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft="-107%";
    }, 500);
}

btnright.addEventListener('click',function(){
    Next();
});


btnleft.addEventListener('click',function(){
    Prev();
});


    

function autoplay(){
    interval=setInterval(function(){
        Next();
    },6000);
}

autoplay();