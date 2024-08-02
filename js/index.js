const titleElement = document.getElementById("typing-title");
const name = "LAUREN VO";
let charIndex = 0;

function type() {
  if (charIndex < name.length) {
    titleElement.textContent += name.charAt(charIndex);
    charIndex++;
    setTimeout(type, 200); 
  }
}

window.addEventListener("load", type);

function scrollToSection(sectionId) {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
      section.scrollIntoView({
          behavior: 'smooth',
          block: 'start', 
      });
  }
}

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
