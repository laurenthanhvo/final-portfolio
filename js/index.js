// Get the element where the title will be typed
const titleElement = document.getElementById("typing-title");
const name = "LAUREN VO";
let charIndex = 0;

// Function to type out the name character by character
function type() {
  if (charIndex < name.length) {
    titleElement.textContent += name.charAt(charIndex); // Append the current character to the title
    charIndex++; // Move to the next character
    setTimeout(type, 200); // Call the type function again after 200ms
  }
}

// Start typing the name when the window loads
window.addEventListener("load", type);

// Function to smoothly scroll to a section with a given ID
function scrollToSection(sectionId) {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
      section.scrollIntoView({
          behavior: 'smooth', // Smooth scrolling
          block: 'start', // Scroll to the start of the section
      });
  }
}

// Add a scroll event listener to the document
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop(); // Current scroll position from the top
  var pageBottom = pageTop + $(window).height(); // Bottom of the current viewport
  var tags = $(".tag"); // All elements with the class 'tag'

  // Loop through each tag and check if it's within the viewport
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible"); // Add 'visible' class if within the viewport
    } else {
      $(tag).removeClass("visible"); // Remove 'visible' class if outside the viewport
    }
  }
});

// Function to reveal elements with the 'reveal' class when they are within the viewport
function reveal() {
  var reveals = document.querySelectorAll(".reveal"); // All elements with the class 'reveal'

  // Loop through each reveal element and check if it's within the viewport
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight; // Height of the window
    var elementTop = reveals[i].getBoundingClientRect().top; // Distance from the top of the element to the viewport top
    var elementVisible = 150; // Offset value for when the element should become visible

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active"); // Add 'active' class if the element is within the viewport
    } else {
      reveals[i].classList.remove("active"); // Remove 'active' class if the element is outside the viewport
    }
  }
}

// Add a scroll event listener to the window to trigger the reveal function
window.addEventListener("scroll", reveal);
