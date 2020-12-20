//hamburger menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
  nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);

const nav__item = document.querySelectorAll('.navigation__item')
nav__item.forEach(item => item.addEventListener('click', handleClick))

//GSAP hover effects

const name = document.querySelector('.hero__hello__name'), 
      hover = gsap.to(name, {y: "-20px", duration: 0.5, paused: true})


const controler = document.querySelector('.hero__images__controler'),
      hover2 = gsap.to(controler, {y: "30px", duration: 0.5, paused: true})

const logo = document.querySelector('.logo'),
      hover3 = gsap.to(logo, {y: "5px", duration: 0.5, paused: true})



function addListeners() {

  name.addEventListener("mouseenter", ()=> hover.play())
  name.addEventListener("mouseleave", ()=> hover.reverse()) 

  controler.addEventListener("mouseenter", ()=> hover2.play())
  controler.addEventListener("mouseleave", ()=> hover2.reverse()) 

  logo.addEventListener("mouseenter", ()=> hover3.play())
  logo.addEventListener("mouseleave", ()=> hover3.reverse()) 
}

//delay function

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(()=> {
      done();
    }, n)
  })
};

//hero plane animation

async function scene2() {

  await delay(2000)

  const tl = gsap.timeline({repeat: -1, repeatDelay: 5})

  tl.fromTo('.hero__images__plane', {x: '0px', opacity: 1, y: '0'}, {duration: 2, opacity: 0, x: '-500px', y: '-100px'})
  tl.fromTo('.hero__images__plane', {x: '300px', opacity: 0, y: '-100'}, {duration: 2, opacity: 1, x: '0px', y: '0'})
 
  return tl;
} 

//page intro

function intro() {
  const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
  
  tl.fromTo('.planeimg',{y: "-5%"}, {duration: 2, y: "5%", repeat: -1, yoyo: true})
  tl.to('.planeimg', {y: '-100%', opacity: 0, duration: 2})
  tl.to('.plane', {y: "-100%", duration: 1}, '-=1.15')
  
  tl.fromTo(['.logo', '.header'], {opacity: 0}, {duration: 1.5, opacity: 1})
  tl.fromTo('.hero__images__controler', {opacity: 0, y: "-200px"}, {duration: 1.5, y: "0px", opacity: 1}, '-=1.5')
  tl.fromTo('.hero__hello__name', {y: "40%", opacity: 0}, {duration: 1, y: "0%", opacity: 1}, '-=1')
  tl.fromTo('.hero__hello__job', {y: "40%", opacity: 0}, {duration: 1, y: "0%", opacity: 1, onComplete: addListeners}, '-=1')
  tl.fromTo('.hero__images__plane', {opacity: 0, x: "200px"}, {duration: 1, x: "0px", opacity: 1, onComplete: scene2})
}

function scene3() {
  const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
  
  tl.fromTo('.logo', {opacity: 0}, {duration: 1.5, opacity: 1})
  tl.fromTo('.hero__images__controler', {opacity: 0, y: "-200px"}, {duration: 1.5, y: "0px", opacity: 1}, '-=1.5')
  tl.fromTo('.hero__hello__name', {y: "40%", opacity: 0}, {duration: 1, y: "0%", opacity: 1}, '-=1')
  tl.fromTo('.hero__hello__job', {y: "40%", opacity: 0}, {duration: 1, y: "0%", opacity: 1}, '-=1')
  tl.fromTo('.hero__images__plane', {opacity: 0, x: "200px"}, {duration: 1, x: "0px", opacity: 1})

}


//About page animations 

const aboutIntro = gsap.timeline({
  scrollTrigger:{
    trigger: '.about',
    start: 'top center',
    toggleActions: "restart none none reset"
  }
})

aboutIntro.fromTo('.about__title__h1', {opacity: 0, y: '-50px'}, {duration: 0.2, opacity: 1, y: '0px'})
      .fromTo(['.about__item', '.about__cv'], {opacity: 0, x: '50px'}, {duration: 0.5, opacity: 1, x: '0px'})
      .fromTo('.about__title__span', {opacity: 0, y: '50px'}, {duration: 0.5, opacity: 1, y: '0px'}, '-=0.5')
      .fromTo('.about__title__span--shorter', {opacity: 0, y: '50px'}, {duration: 0.5, opacity: 1, y: '0px'})
      .fromTo('.about__title__span--shortest', {opacity: 0, y: '50px'}, {duration: 0.5, opacity: 1, y: '0px', onComplete: aboutHeaderHover})
      .fromTo('.about__span', {opacity: 0, x: '-70px'}, {duration: 0.4, opacity: 1, x: '0px'}, '-=1')
      .fromTo('.about__span--shorter', {opacity: 0, x: '-70px'}, {duration: 0.4, opacity: 1, x: '0px'}, '-=0.7')
      .fromTo('.about__span--shortest', {opacity: 0, x: '-70px'}, {duration: 0.4, opacity: 1, x: '0px'}, '-=0.4')
      



//About span animations

function aboutHeaderHover() {
  
  const about__title__h1 = document.querySelector('.about__title__h1')

  const tl = gsap.timeline({paused: true})

  tl.to('.about__title__span--shorter', {duration: 1, x: "100%"})
    .to('.about__title__span--shortest', {duration: 1, x: "300%"}, '-=0.7')

  
  about__title__h1.addEventListener("mouseenter", ()=> tl.play())
  about__title__h1.addEventListener("mouseleave", ()=> tl.reverse())
}

//About animations 

const square1animation = gsap.timeline({
  repeat: -1,
  delay: 0.6
})

square1animation.fromTo('.square1__vector16', {opacity: 0, x: "-80px", rotation: 0}, {duration: 5, x: "0px", opacity: 1, rotation: 18})
                .fromTo('.square1__vector16', {opacity: 1, x: "0px", rotation: 18}, {duration: 2, x: "50px", opacity: 0, rotation: 36})
                .fromTo('.square1__vector17', {opacity: 0, x: "80px", rotation: 0}, {duration: 2, x: "0px", opacity: 1, rotation: 18}, 0)
                .fromTo('.square1__vector17', {opacity: 1, x: "0px", rotation: 18}, {duration: 3, x: "-80px", opacity: 0, rotation: 36})

const square2animation = gsap.timeline({
  repeat: -1,
  delay: 0.3
})

square2animation.fromTo('.square2__vector15', {opacity: 0, x: "30px", y: "40", rotation: 0}, {duration: 2, x: "0px", y: "0px", opacity: 1, rotation: 18})
                .fromTo('.square2__vector15', {opacity: 1, x: "0px", y: "0px", rotation: 18}, {duration: 3, x: "-30px", y: "-40", opacity: 0, rotation: 36})
                .fromTo('.square2__vector14', {opacity: 0, x: "-30px", y: "-40", rotation: 0}, {duration: 3, x: "0px", y: "0px", opacity: 1, rotation: 18}, 0)
                .fromTo('.square2__vector14', {opacity: 1, x: "0px", y: "0px", rotation: 18}, {duration: 5, x: "30px", y: "40", opacity: 0, rotation: 36})

                

const square3animation = gsap.timeline({
  repeat: -1
})

square3animation.fromTo('.square3__vector18', {opacity: 0, y: "-50px", rotation: 0}, {duration: 2, y: "0px", opacity: 1, rotation: 18})
               .fromTo('.square3__vector18', {opacity: 1, y: "0px", rotation: 18}, {duration: 2, y: "50px", opacity: 0, rotation: 36})
               .fromTo('.square3__vector19', {opacity: 0, y: "50px", rotation: 0}, {duration: 2, y: "0px", opacity: 1, rotation: 18}, 0)
               .fromTo('.square3__vector19', {opacity: 1, y: "0px", rotation: 18}, {duration: 2, y: "-50px", opacity: 0, rotation: 36})


//Projects page animations 

const projectsIntro = gsap.timeline({
  scrollTrigger:{
    trigger: '.projects',
    start: 'top center',
    toggleActions: "restart none none reset"
  }
})

projectsIntro.fromTo('.projects__header__text', {opacity: 0, y: '-50px'}, {duration: 0.2, opacity: 1, y: '0px'})
            .fromTo('.glide', {opacity: 0, x: '50px'}, {duration: 0.5, opacity: 1, x: '0px'})
            .fromTo('.projects__stack', {opacity: 0}, {duration: 1, opacity: 1}, '-=1')
            .fromTo('.projects__header__span', {opacity: 0, y: '50px'}, {duration: 0.5, opacity: 1, y: '0px'}, '-=0.5')
            .fromTo('.projects__header__span--shorter', {opacity: 0, y: '50px'}, {duration: 0.5, opacity: 1, y: '0px'})
            .fromTo('.projects__header__span--shortest', {opacity: 0, y: '50px'}, {duration: 0.5, opacity: 1, y: '0px'})


//Rocket animation

const falcon9rocket = gsap.timeline({
  scrollTrigger:{
    trigger: '.projects',
    start: 'top center',
  },
  repeat: -1,
  repeatDelay: 4,
  delay: 1.5
})


falcon9rocket.fromTo('.projects__svg__Vector48', {fill: 'red'}, {duration: 2, fill: '#6C63FF'})
  .to('.projects__svg__fire', {duration: 0.5, opacity: 1}, '-=1.5')
  .to(['.projects__svg__rocket', '.projects__svg__fire'], {duration: 3, y: '-600px', opacity: 0}, '-=1')
  .to(['.projects__svg__rocket', '.projects__svg__fire'], {duration: 3, y: '0px', opacity: 1}, '+=4')
  .to('.projects__svg__fire', {opacity: 0}, '-=0.5')
  
// contact animations 

const contactIntro = gsap.timeline({
  scrollTrigger:{
    trigger: '.contact',
    start: 'top center',
    toggleActions: "restart none none reset"
  }
})

contactIntro.fromTo('.contact__header__text', {opacity: 0, y: '-50px'}, {duration: 0.4, opacity: 1, y: '0px'})
            .fromTo('#saturn', {opacity: 0, y: '-70px'}, {duration: 0.4, opacity: 1, y: '0px'})
            .fromTo('#falconheavy', {opacity: 0, y: '70px'}, {duration: 0.4, opacity: 1, y: '0px'})
            .fromTo('#contact__laptop', {opacity: 0}, {duration: 0.4, opacity: 1})
            .fromTo('.contact__header__span', {opacity: 0, y: '50px'}, {duration: 0.5, opacity: 1, y: '0px'}, '-=0.5')
            .fromTo('.contact__header__span--shorter', {opacity: 0, y: '50px'}, {duration: 0.5, opacity: 1, y: '0px'})
            .fromTo('.contact__header__span--shortest', {opacity: 0, y: '50px'}, {duration: 0.5, opacity: 1, y: '0px'})



// contact hover animations (didn't work in pure css)

const github =  document.getElementById('github');
const saturn = document.getElementById('saturn')

github.addEventListener('mouseover', function(){
  saturn.classList.toggle('transform__scale')
})


github.addEventListener('mouseout', function(){
  saturn.classList.toggle('transform__scale')
})

const facebook = document.getElementById('facebook');
const flames = [document.querySelector('.falconheavy__vector38'), document.querySelector('.falconheavy__vector37'), document.querySelector('.falconheavy__vector36'), document.querySelector('.falconheavy__vector35')]

facebook.addEventListener('mouseover', function(){
  flames.forEach(flame => flame.classList.toggle('flame__fill'))
})

facebook.addEventListener('mouseout', function(){
  flames.forEach(flame => flame.classList.toggle('flame__fill'))
})

const linkedin = document.getElementById('linkedin')
const upperCircle = document.querySelector('.laptop__vector118')
const bottomCircle = document.querySelector('.laptop__vector119')

linkedin.addEventListener('mouseover', function(){
  upperCircle.classList.toggle('transform__up')
  bottomCircle.classList.toggle('transform__down')
})

linkedin.addEventListener('mouseout', function(){
  upperCircle.classList.toggle('transform__up')
  bottomCircle.classList.toggle('transform__down')
})



