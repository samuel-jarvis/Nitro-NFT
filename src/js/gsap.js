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

gsap.from(".hero-h1", {
  duration: .8, 
  delay: 1, 
  x: -20,
  opacity: '0'
});

gsap.from(".hero-p", {
  duration: .5, 
  delay: 2, 
  y: -20,
  opacity: '0'
});

gsap.from(".hero__content__btns", {
  duration: .5, 
  delay: 2.5, 
  y: -20,
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
  // scrollTrigger: ".coounter-no",
  textContent: 0,
  delay: .5, 
  duration: 2,
  ease: Power2,
  snap: { textContent: 1 },
});

// Mouse follow circle animation
gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.1;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});



// Mobile Dropdown
openBtn = document.querySelector('.menu-btn')
closeBtn = document.querySelector('.close-btn')

tl = gsap.timeline();
tl.paused(true);
tl.to('.overlay2', {height: "100vh", duration: .5})
tl.to('.overlay', {height: "100vh", duration: .6,}, "-=.3")
tl.from('.links__list--mobile', {y: '30px', stagger: 0.1, opacity: 0})

openBtn.addEventListener('click', () => {
  tl.play();
})

closeBtn.addEventListener('click', () => {
  console.log('Hell No')
  tl.reverse();
})