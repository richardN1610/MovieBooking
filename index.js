if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready(){
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
}