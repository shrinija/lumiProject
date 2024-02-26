function changeImageOnMobile() {
  // Get a reference to the image element
  var myImage = document.getElementById('myImage');

  // Check if the viewport width is less than or equal to 768 pixels (you can adjust this threshold)
  if (window.innerWidth <= 860) {
      // Change the source of the image for mobile view
      myImage.src = './topimgsmall.png';
  } else {
      // Change the source of the image for desktop view
      myImage.src = './topimage.png';
  }
}

  // Call the function on page load and resize
  changeImageOnMobile();

  // Attach the function to the window resize event to handle changes in viewport size
  window.addEventListener('resize', changeImageOnMobile);

  
function toggleMenu() {
  const newnav = document.querySelector('.mobile-nav');

  if(newnav.classList.contains('mobile-nav')){
    newnav.classList.remove("mobile-nav");
    newnav.classList.add("new-links");
  }
  else{
    newnav.classList.remove("new-links");
    newnav.classList.add("mobile-nav");
  }
}