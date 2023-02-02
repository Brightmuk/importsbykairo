

const nav = document.getElementById('nav');

window.addEventListener("scroll", event => {
    if(window.scrollY>29){
        nav.classList.add("nav-fixed");
    }else{
        nav.classList.remove("nav-fixed");
    
}

 
}, { passive: true });



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);

document.getElementById('year').innerHTML = new Date().getFullYear();

function scrollSlides() { 
    document.getElementsByClassName("brand-slideshow")[0].scrollTo(window.innerHeight,3000)
}
function closeSideNav(id){
  
    var navs = document.getElementsByClassName('sidebar');
    for (var i=0;i<navs.length;i++){
        navs[i].classList.add('sidebar-disabled');
    }
}
function openSideNav(id){
  var navs = document.getElementsByClassName('sidebar');
  for (var i=0;i<navs.length;i++){
      navs[i].classList.add('sidebar-disabled');
  }
    document.getElementById(id).classList.remove('sidebar-disabled');
}

