function changeImageOnMobile() {
  // Get a reference to the image element
  var myImage = document.getElementById("myImage");

  // Check if the viewport width is less than or equal to 768 pixels (you can adjust this threshold)
  if (window.innerWidth <= 860) {
    // Change the source of the image for mobile view
    myImage.src = "./topimgsmall.png";
  } else {
    // Change the source of the image for desktop view
    myImage.src = "./topimage.png";
  }
}

// Call the function on page load and resize
changeImageOnMobile();

// Attach the function to the window resize event to handle changes in viewport size
window.addEventListener("resize", changeImageOnMobile);

//---------------------------------------------

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

let isMobileNavOpen = false;

hamburger.addEventListener("click", () => {
  isMobileNavOpen = !isMobileNavOpen;
  if (isMobileNavOpen) {
    mobileNav.classList.remove("mobile-nav");
    mobileNav.classList.add("new-links");
  } else {
    mobileNav.classList.remove("new-links");
    mobileNav.classList.add("mobile-nav");
  }
});
