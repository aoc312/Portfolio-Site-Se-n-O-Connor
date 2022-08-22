
function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

function contactToggle() {
  var x = document.getElementById('mycontacttoggle')
  if (x.className === 'contacttoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'contacttoggle'
  }
}
