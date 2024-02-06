let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Scroll down
    document.querySelector('.sticky-header').style.top = "-80px"; // Hide header when scrolling down
  } else {
    // Scroll up
    document.querySelector('.sticky-header').style.top = "0"; // Show header when scrolling up
  }
  lastScrollTop = currentScroll;
});
