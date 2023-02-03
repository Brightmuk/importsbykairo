const nav = document.getElementById('nav');
var navOpen = false;


window.addEventListener("scroll", event => {
  reveal()
    if(window.scrollY>29){
        nav.classList.add("nav-fixed");
    }else{
        nav.classList.remove("nav-fixed");
}
}, { passive: true });




function reveal() {
  //On scroll the collapsed nav should always remain on top

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

var navBtn = document.getElementById('menu-btn');

navBtn.addEventListener("click",toggleNav)

function toggleNav(){
  if(navOpen){
    document.getElementById('collapse-nav').style.top="-500px";
    navOpen=false;
  }else{
    navOpen=true;
    console.log(window.scrollY)
    document.getElementById('collapse-nav').style.top=`${window.scrollY}px`;
  }
}

