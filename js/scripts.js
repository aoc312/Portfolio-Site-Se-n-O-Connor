
function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

var coll = document.getElementsByClassName('collapsible')
var i

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', buttonToggle)
}

function buttonToggle() {
  this.classList.toggle('open-section')
  var content = this.nextElementSibling
  var icon = this.querySelector('.svg-section')
  icon.classList.toggle('closed')
  if (content.style.maxHeight) {
    content.style.maxHeight = null
  } else {
    content.style.maxHeight = content.scrollHeight + 'px'
  }
  if (this.classList.contains('open-section')) {
    this.scrollIntoView({block: 'start'})
  }
}

function myFunction() {
  var myDropdown = document.getElementById('myDropdown')
  if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show')
  } else {
    myDropdown.classList += (' show')
  }
}


let slideIndex = [1, 1, 1, 1]
let slideId = ['mySlides1', 'mySlides2', 'mySlides3', 'mySlides4']
let dotId = ['myDots1', 'myDots2', 'myDots3', 'myDots4']
showSlides(1, 0)
showSlides(1, 1)
showSlides(1, 2)
showSlides(1, 3)

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no)
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no)
}

function showSlides(n, no) {
  let i
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
