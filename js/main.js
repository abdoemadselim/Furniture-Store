$('#gallery-carousel').owlCarousel({
    loop:true,
    margin:15,
    
    responsive:{
        0:{
            items:1,
            stagePadding:50
        },
        400:{
            items:2,
            stagePadding:80
        },
        600:{
            items:4
        },
        1000:{
            stagePadding:180,
            items:5
        }
    }
})


$('#clients-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
})


$('#posts-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",  "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        550:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#shop-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",  "<i class='fa-solid fa-arrow-right'></i>"],
    items:5,
    margin:20,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        
    }
})


