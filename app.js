//hamburger menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
  nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);

// page trasitions

function pageTransition() {
  const tl = gsap.timeline();

  tl.to('.transition li', {duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
  tl.to('.transition li', {duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
}

function intro() {
  const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
  
  tl.fromTo('.planeimg',{y: "-5%"}, {duration: 2, y: "5%", repeat: -1, yoyo: true})
  tl.to('.planeimg', {y: '-100%', opacity: 0, duration: 2})
  tl.to('.plane', {y: "-100%", duration: 1}, '-=1.15')
  tl.fromTo(['.logo'], {opacity: 0}, {duration: 1.5, opacity: 1})
  tl.fromTo('.hero__images__controler', {opacity: 0, y: "-200px"}, {duration: 1.5, y: "0px", opacity: 1}, '-=1.5')
  tl.fromTo('.hero__hello__name', {y: "40%", opacity: 0}, {duration: 1, y: "0%", opacity: 1}, '-=1')
  tl.fromTo('.hero__hello__job', {y: "40%", opacity: 0}, {duration: 1, y: "0%", opacity: 1, onComplete: addListeners}, '-=1')
  tl.fromTo('.hero__images__plane', {opacity: 0, x: "200px"}, {duration: 1, x: "0px", opacity: 1, onComplete: scene2})
/*
  const tl2 = gsap.timeline({delay: 1.5, repeat: -1, repeatDelay: 5})

  tl2.fromTo('.hero__images__plane', {x: '0px', opacity: 1, y: '0'}, {duration: 2, opacity: 0, x: '-500px', y: '-100px'})
  tl2.fromTo('.hero__images__plane', {x: '300px', opacity: 0, y: '-100'}, {duration: 2, opacity: 1, x: '0px', y: '0'})
*/
}

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(()=> {
      done();
    }, n)
  })
};

barba.init({
  sync: true,

  transitions: [{
    async once(data){

      intro();
    }, 

    async leave(data){

      const done = this.async();

      handleClick()
      pageTransition();
      await delay(1500)
      done(); 
    },

    async enter(data){
      
    }
    

  }]
})



//GSAP timeline

/*
function scene1() {
  const tl = gsap.timeline({defaults: {ease: 'power1.out'}, onComplete: setTimeout(addListeners(), 2000), onComplete: scene2()})

tl.fromTo(['.logo'], {opacity: 0}, {duration: 1.5, opacity: 1})
tl.fromTo('.hero__images__controler', {opacity: 0, y: "-200px"}, {duration: 1.5, y: "0px", opacity: 1}, '-=1.5')
tl.fromTo('.hero__hello__name', {y: "40%", opacity: 0}, {duration: 1, y: "0%", opacity: 1}, '-=1')
tl.fromTo('.hero__hello__job', {y: "40%", opacity: 0}, {duration: 1, y: "0%", opacity: 1}, '-=1')
tl.fromTo('.hero__images__plane', {opacity: 0, x: "200px"}, {duration: 1, x: "0px", opacity: 1})

}

*/

//GSAP hover effects

const name = document.querySelector('.hero__hello__name'), 
      hover = gsap.to(name, {y: "-20px", duration: 0.5, paused: true})


const controler = document.querySelector('.hero__images__controler'),
      hover2 = gsap.to(controler, {y: "30px", duration: 0.5, paused: true})



function addListeners() {

  name.addEventListener("mouseenter", ()=> hover.play())
  name.addEventListener("mouseleave", ()=> hover.reverse()) 

  controler.addEventListener("mouseenter", ()=> hover2.play())
  controler.addEventListener("mouseleave", ()=> hover2.reverse()) 

}

//plane animation

async function scene2() {

  await delay(2000)

  const tl = gsap.timeline({repeat: -1, repeatDelay: 5})

  tl.fromTo('.hero__images__plane', {x: '0px', opacity: 1, y: '0'}, {duration: 2, opacity: 0, x: '-500px', y: '-100px'})
  tl.fromTo('.hero__images__plane', {x: '300px', opacity: 0, y: '-100'}, {duration: 2, opacity: 1, x: '0px', y: '0'})
 
  return tl;
}

/*
function scene2() {
  function interval() {
    setInterval(function fly() {

      const tl = gsap.timeline({defaults: {ease: 'power1.out'},})
  
      
      return tl
    
    }, 5000)
  }

  setTimeout(interval(), 2000)
  
}
*/









