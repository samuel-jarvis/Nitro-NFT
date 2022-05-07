// Make Nav Sticky
const nav = document.querySelector('.nav');
window.addEventListener('scroll', function() {
    // console.log(window.scrollY);
    if (window.scrollY > 200) nav.classList.add('navSticky');
    else nav.classList.remove('navSticky');
});
// Swiper JS initialization
const swiper = new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar'
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

//# sourceMappingURL=index.8f0c9192.js.map
