(function () {
  "use strict";
 
  // define variables
  var items = document.querySelectorAll(".timeline li");
 
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


 
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
 
  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });
 
    // sticky header
    let header = document.querySelector('header');
 
    header.classList.toggle('sticky', window.scrollY > 100);
 
    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 
    // animation footer on scroll
    let footer = document.querySelector('footer');
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;
 
    if (Math.ceil(scrolled) === scrollable) {
        footer.classList.add('show-animate');
    }
    else {
        footer.classList.remove('show-animate');
    }
}


const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


 
// const sections = document.querySelectorAll('section[id]')
 
// function scrollActive() {
//   const scrollY = window.scrollY;
 
//   sections.forEach(current =>{
//     const sectionHeight = current.offsetHeight,
//         sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute('id')
 
//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
 
//       document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
 
//     }  else {
 
//       document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
 
//     }
//   })
// }
 
// window.addEventListener('scroll', scrollActive)

 
var typingEffect = new Typed(".typedText",{
    strings : ["Lucy","Truong Dieu Anh","a Senior","Future Event Planner"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})
 