// Get the header
var header = document.querySelector('header');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}