function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {        
        tabcontent[i].style.display = "none";     
        window.scrollTo(0, 0);
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        window.scrollTo(0, 0);
      }
      document.getElementById(cityName).style.display = "block";     
      evt.currentTarget.className += " active";
      window.scrollTo(0, 0);
}

function myFunction() {
  var x = document.getElementById("tabs");
  if (x.className === "tab") {
    x.className += " responsive";
  } else {
    x.className = "tab";
  }
}
function myFunction1() {
  var x = document.getElementById("tabs");
  x.className = "tab";
   
}
function openNav() {
  
  document.getElementById("myNav").style.height = "22%";
  document.getElementById("myNav").style.position = "sticky";
  document.getElementById("bmenu1").style.position = "absolute";
  document.getElementById("tabs").style.position = "absolute";
  document.getElementById("bmenu1").style.filter = "blur(20px)";
  document.getElementById("home").style.filter = "blur(2px)";
  
  document.body.style.overflow = "hidden";
  
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("myNav").style.position = "absolute";
  document.getElementById("bmenu1").style.position = "sticky";
  document.getElementById("tabs").style.position = "sticky";
  document.getElementById("bmenu1").style.filter = "blur(0px)";
  document.getElementById("home").style.filter = "blur(0px)";
  
  document.body.style.overflow = "scroll";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

