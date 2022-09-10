

window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        NextOffice(); 
        NextEntretenimiento(); 
        NextWindows(); 
    },10000);
});

const sliderOffice = document.querySelector('#sliderOffice');
const sliderEntretenimiento = document.querySelector('#sliderEntretenimiento');
const sliderWindows = document.querySelector('#sliderWindows');

let sliderSectionOffice = document.querySelectorAll(".slider__section-Office");
let sliderSectionEntretenimiento = document.querySelectorAll(".slider__section-Entretenimiento");
let sliderSectionWindows = document.querySelectorAll(".slider__section-Windows");

let sliderSectionLastOffice = sliderSectionOffice[sliderSectionOffice.length-1];
let sliderSectionLastEntretenimiento = sliderSectionEntretenimiento[sliderSectionEntretenimiento.length-1];
let sliderSectionLastWindows = sliderSectionWindows[sliderSectionWindows.length-1];


const btnLeftOffice = document.querySelector('#btn-left-Office');
const btnRightOffice = document.querySelector('#btn-right-Office');

const btnLeftEntretenimiento = document.querySelector('#btn-left-Entretenimiento');
const btnRightEntretenimiento = document.querySelector('#btn-right-Entretenimiento');

const btnLeftWindows = document.querySelector('#btn-left-Windows');
const btnRightWindows = document.querySelector('#btn-right-Windows');

sliderOffice.insertAdjacentElement('afterbegin', sliderSectionLastOffice);
sliderEntretenimiento.insertAdjacentElement('afterbegin', sliderSectionLastEntretenimiento);
sliderWindows.insertAdjacentElement('afterbegin', sliderSectionLastWindows);

function NextOffice(){
    let sliderSectionFirstOffice = document.querySelectorAll('.slider__section-Office')[0];    

    sliderOffice.style.marginLeft = '-200%';
    sliderOffice.style.transition = "all 0.5s";
 
    setTimeout( () => {
        sliderOffice.style.transition = "none";
        sliderOffice.insertAdjacentElement('beforeend', sliderSectionFirstOffice);
        sliderOffice.style.marginLeft = "-100%";

    }, 500);
}
function PreviousOffice(){
    let sliderSectionOffice = document.querySelectorAll('.slider__section-Office');
    let sliderSectionLastOffice = sliderSectionOffice[sliderSectionOffice.length-1];
    
    sliderOffice.style.marginLeft = '0%';
    sliderOffice.style.transition = "all 0.5s";

    setTimeout( () => {
        sliderOffice.style.transition = "none";
        sliderOffice.insertAdjacentElement('afterbegin', sliderSectionLastOffice);
        sliderOffice.style.marginLeft = "-100%";  
    }, 500);
}
btnRightOffice.addEventListener('click', NextOffice);
btnLeftOffice.addEventListener('click', PreviousOffice);




function NextEntretenimiento(){
    let sliderSectionFirstEntretenimiento = document.querySelectorAll('.slider__section-Entretenimiento')[0];

    sliderEntretenimiento.style.marginLeft = '-200%';
    sliderEntretenimiento.style.transition = "all 0.5s";

    setTimeout( () => {
        sliderEntretenimiento.style.transition = "none";
        sliderEntretenimiento.insertAdjacentElement('beforeend', sliderSectionFirstEntretenimiento);
        sliderEntretenimiento.style.marginLeft = "-100%";
    }, 500);
}
function PreviousEntretenimiento(){    
    let sliderSectionEntretenimiento = document.querySelectorAll('.slider__section-Entretenimiento');
    let sliderSectionLastEntretenimiento = sliderSectionEntretenimiento[sliderSectionEntretenimiento.length-1];

    sliderEntretenimiento.style.marginLeft = '0%';
    sliderEntretenimiento.style.transition = "all 0.5s";

    setTimeout( () => {
        sliderEntretenimiento.style.transition = "none";
        sliderEntretenimiento.insertAdjacentElement('afterbegin', sliderSectionLastEntretenimiento);
        sliderEntretenimiento.style.marginLeft = "-100%";
    }, 500);
}
btnRightEntretenimiento.addEventListener('click', NextEntretenimiento);
btnLeftEntretenimiento.addEventListener('click', PreviousEntretenimiento);




function NextWindows(){
    let sliderSectionFirstWindows = document.querySelectorAll('.slider__section-Windows')[0];

    sliderWindows.style.marginLeft = '-200%';
    sliderWindows.style.transition = "all 0.5s";

    setTimeout( () => {
        sliderWindows.style.transition = "none";
        sliderWindows.insertAdjacentElement('beforeend', sliderSectionFirstWindows);
        sliderWindows.style.marginLeft = "-100%";
    }, 500);
}
function PreviousWindows(){
    let sliderSectionWindows = document.querySelectorAll('.slider__section-Windows');
    let sliderSectionLastWindows = sliderSectionWindows[sliderSectionWindows.length-1];

    sliderWindows.style.marginLeft = '0%';
    sliderWindows.style.transition = "all 0.5s";

    setTimeout( () => {

        sliderWindows.style.transition = "none";
        sliderWindows.insertAdjacentElement('afterbegin', sliderSectionLastWindows);
        sliderWindows.style.marginLeft = "-100%"; 
    }, 500);
}
btnRightWindows.addEventListener('click', NextWindows);
btnLeftWindows.addEventListener('click', PreviousWindows);
