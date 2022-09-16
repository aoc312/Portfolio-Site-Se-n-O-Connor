
function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
<<<<<<< Updated upstream
=======

function contactToggle() {
  var x = document.getElementById('mycontacttoggle')
  if (x.className === 'contacttoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'contacttoggle'
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
>>>>>>> Stashed changes
