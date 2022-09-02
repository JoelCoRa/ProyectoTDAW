const slider2=document.querySelector("#slider2");
let sliderSectiondos = document.querySelectorAll(".slider-sectiondos");
let sliderSectionLastdos = sliderSectiondos[sliderSectiondos.length -1];

const btnleft2 = document.querySelector("#btn-left2");
const btnright2 = document.querySelector("#btn-right2");

slider2.insertAdjacentElement('afterbegin',sliderSectionLastdos);

function Nexttt(){
    let sliderSectionFirstdos =document.querySelectorAll(".slider-sectiondos")[0];
    slider2.style.marginLeft ="-107%";
    slider2.style.transition = "all 0.5s";
    setTimeout(function(){
        slider2.style.transition="none";
        slider2.insertAdjacentElement('beforeend',sliderSectionFirstdos);
        slider2.style.marginLeftt="-107%";
           
    }, 500);
}

function Prevvv(){
    let sliderSectiondos = document.querySelectorAll(".slider-sectiondos");
    let sliderSectionLastdos = sliderSectiondos[sliderSectiondos.length -1];
    slider2.style.marginLeft="0";
    slider2.style.transition = "all 0.5s";


    setTimeout(function() {
        slider2.style.transition="none";
        slider2.insertAdjacentElement('afterbegin', sliderSectionLastdos);
        slider2.style.marginLeft="-107%";
    }, 500);
}

btnright2.addEventListener('click',function(){
    Nexttt();
});


btnleft2.addEventListener('click',function(){
    Prevvv();
});


    

function autoplay(){
    interval=setInterval(function(){
        Nexttt();
    },6000);
}

autoplay();