const slider3=document.querySelector("#slider3");
let sliderSectiontres = document.querySelectorAll(".slider-sectiontres");
let sliderSectionLasttres = sliderSectiontres[sliderSectiontres.length -1];

const btnleft3 = document.querySelector("#btn-left3");
const btnright3 = document.querySelector("#btn-right3");

slider3.insertAdjacentElement('afterbegin',sliderSectionLasttres);

function Nextt(){
    let sliderSectionFirsttres =document.querySelectorAll(".slider-sectiontres")[0];
    slider3.style.marginLeft ="-107%";
    slider3.style.transition = "all 0.5s";
    setTimeout(function(){
        slider3.style.transition="none";
        slider3.insertAdjacentElement('beforeend',sliderSectionFirsttres);
        slider3.style.marginLeftt="-107%";
           
    }, 500);
}

function Prevv(){
    let sliderSectiontres = document.querySelectorAll(".slider-sectiontres");
    let sliderSectionLasttres = sliderSectiontres[sliderSectiontres.length -1];
    slider3.style.marginLeft="0";
    slider3.style.transition = "all 0.5s";


    setTimeout(function() {
        slider3.style.transition="none";
        slider3.insertAdjacentElement('afterbegin', sliderSectionLasttres);
        slider3.style.marginLeft="-107%";
    }, 500);
}

btnright3.addEventListener('click',function(){
    Nextt();
});


btnleft3.addEventListener('click',function(){
    Prevv();
});


    

function autoplay(){
    interval=setInterval(function(){
        Nextt();
    },6000);
}

autoplay();