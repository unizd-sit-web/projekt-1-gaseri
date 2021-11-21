window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("header").style.padding = "30px 10px";
  } else {
    document.getElementsByClassName("header").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}