let body = document.querySelector("body");
//code for floting header
let lastScrollY = window.scrollY;

let head = document.querySelector("header"); //enter the class/id/


window.addEventListener("scroll", () => {

  
   if (window.scrollY > lastScrollY) 
   
      { head.style.cssText="top:-46px;";  } 
      
  else{ head.style.cssText="top:0";  }
  
  lastScrollY = window.scrollY;
});
//end of the code

// code for the menu button open and close
let menubar = document.querySelector(".menubar");
function openmen(){
   menubar.style.cssText="right:0;";
   body.style.cssText="overflow:hidden;";
  
}
function closemen(){
    menubar.style.cssText="right:-100%;";
    body.style.cssText="overflow:auto;";
}
// end of the code


//code for menunar click hightlite

// const divs = document.querySelectorAll('.mbar');  //enter the div class

//    divs.forEach(div => {
//        div.addEventListener('click', () => {
//            divs.forEach(d => d.style.backgroundColor = 'white'); // Reset all to yellow
//            div.style.backgroundColor = '#e9ecef '; // Set clicked div to green
//        });
//    });
   
   
 //code for poster
 const container = document.querySelector(".scroll-box");
 
 const slides = container.children;
 const totalSlides = slides.length;
 let currentIndex = 0;
 let scrollDirection = 1; // 1 for forward, -1 for backward
 
 function scrollImages() {
 const slideWidth = slides[0].offsetWidth;
 
 // Calculate next scroll position
 const nextIndex = currentIndex + scrollDirection;
 
 if (nextIndex < 0 || nextIndex >= totalSlides) {
 scrollDirection *= -1; // Reverse direction
 } else {
 currentIndex = nextIndex;
 container.scrollTo({
 left: slideWidth * currentIndex,
 behavior: 'smooth'
 });
 }
 }
 setTimeout(() => {
 setInterval(scrollImages, 2000); //start scrool is secobds
 }, 2000);  //repearing scrool duration in seconds
 
 
 // 

let xmenubar = document.querySelector(".xmenubar");

function openmen2(){
    xmenubar.style.cssText="right:0;"
}

function closemen2(){
    xmenubar.style.cssText="right:-100%;"
}
