// Make Nav Sticky
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
  // console.log(window.scrollY);
  if (window.scrollY > 200){
    nav.classList.add('navSticky')
  } else {
    nav.classList.remove('navSticky')
  }
});


// Smooth scrolling
// document.querySelector('.links__lists').addEventListener
// ('click', function(e){
//   e.preventDefault()
//   console.log(e.target)
// })

// Swiper JS initialization
const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});



