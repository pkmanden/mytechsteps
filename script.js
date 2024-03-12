var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })

function showAbout() {
    var x = document.getElementById("myself");
    var y = document.getElementById("skills");
    
    x.style.display = "block";
    y.style.display = "none";
    
}

function showSkills() {
    var x = document.getElementById("myself");
    var y = document.getElementById("skills");
    y.style.display = "block";
    x.style.display = "none";
}

window.onscroll = function() {scrollFunction()};

var headerTopOffset = document.getElementById("header").offsetTop;
function scrollFunction() {

  if (window.pageYOffset > headerTopOffset) {
    document.getElementById("header").style.fontSize = "30px";
    header.classList.add("sticky");
  } else {
    document.getElementById("header").style.fontSize = "40px";
    header.classList.remove("sticky");
  }
}



