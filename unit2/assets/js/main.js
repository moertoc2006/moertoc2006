function showMenu(toggleId, menuId){
    const toggle = document.getElementById(toggleId)
    const menu = document.getElementById(menuId)

     if(toggle && menu){
            toggle.addEventListener('click', function(){
                menu.classList.toggle('active')
            })
        }   
}
showMenu('burger', 'menu');

const heroSlider = new Swiper('.hero_container',{
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 2000,
    grabCursor: true,
    effect: 'cube',
    cubeEffect:{
        shadow: true,
        slideShadows: true,
        shadowoffset: 20, 
        shadowScale: 0.9,
    },
});

const sr = ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 1000,
})

sr.reveal('.item_news', {
    origin: "left",
    interval: 200,
})