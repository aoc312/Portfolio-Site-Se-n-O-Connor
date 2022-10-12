
function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('open-section')
    var content = this.nextElementSibling
    var icon = document.getElementById('myButtonicon')
    if (icon.className.baseVal === 'open-icon') {
      icon.className.baseVal += ' closed'
    } else {
      icon.className.baseVal = 'open-icon'
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
}

function buttonToggle() {
  var toggle = document.getElementById('myProjtoggle')
  var icon = document.getElementById('myButtonicon')
  if (toggle.className === 'project-toggle') {
    toggle.className += ' p-toggled'
  } else {
    toggle.className = 'project-toggle'
  }
  if (icon.className.baseVal === 'open-icon') {
    icon.className.baseVal += ' closed'
  } else {
    icon.className.baseVal = 'open-icon'
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(myFunction) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

let slideIndex = [1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"]
let dotId = ["myDots1", "myDots2", "myDots3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
}
