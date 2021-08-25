if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {

}
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 35, //rotating the angel of the image
        depth: 650, //depth of the collection the higher, the more u can see
        modifier: 1,
        slideShadows: false,
    },
    loop:true,  //infinite loop
    pagination: {
        el: ".swiper-pagination",
    },
});