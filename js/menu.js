
document.addEventListener('DOMContentLoaded', function(){
    menuHamburguesa();
});





function menuHamburguesa(){
    const hamburguer = document.querySelector(".hamburguer");
    const nav = document.querySelector('.nav-menu');


    // console.log(menu)
    // console.log(hamburguer)

    hamburguer.addEventListener('click',() => {
        nav.classList.toggle('spread');
        nav.classList.toggle('bg-white');
    });

    // window.addEventListener('click', (e) =>{
    //     if(nav.classList.contains("spread") && e.target != nav && e.target!=hamburguer){
    //         nav.classList.toggle("spread")
    //     }
    // })
}





