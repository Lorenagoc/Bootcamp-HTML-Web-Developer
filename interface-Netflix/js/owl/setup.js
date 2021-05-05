//cartaz
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:8
        }
    }
})

function redirecionar() {
    window.open("https://dark.netflix.io/pt"); //abre em outra aba o site oficial da serie dark
}