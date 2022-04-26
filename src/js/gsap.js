// gsap.from(".nav__logo", {duration: 1, y: '-100%'});

gsap.from('.nav__logo', {
  duration: 0.5,
  delay: .5,
  opacity: 0,
  x: -20.
})

gsap.from(".links__list", {
  delay: .8,
  opacity: 0,
  stagger: 0.2,
})

gsap.from('.nav__actions', {
  duration: 0.5,
  delay: 1,
  opacity: 0,
  x: 20.
})

gsap.from(".hero__content--text", {
  duration: .8, 
  delay: 1, 
  x: -20,
  opacity: '0'
});

gsap.from(".hero__content--image", {
  duration: .8, 
  delay: 1, 
  x: 20,
  opacity: '0'
});


gsap.from(".hero__content--stat", {
  duration: 1.2, 
  delay: 1, 
  x: 20,
  opacity: '0'
});



gsap.from(".counter-no", {
  textContent: 0,
  delay: .5, 
  duration: 2,
  ease: Power2,
  snap: { textContent: 1 },
});