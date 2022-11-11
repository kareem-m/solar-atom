// Inttialize AOS
AOS.init();

// Sticky navbar
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// Navbar menu
const menu = document.querySelector("ul.menu");
const bars = document.querySelector("nav .bars");
const links = document.querySelectorAll("nav ul.menu li")

bars.addEventListener("click", () => {
  menu.classList.toggle("active");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Auto Writen
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Row down button
const rowDown = document.querySelector(".chevron-down");
rowDown.addEventListener("click", () => {
  window.scrollTo({
    top: 600,
  });
});

// All writes dynamic
const span = document.querySelector("footer .container p span");
span.innerHTML = new Date().getFullYear();

// Loading
let loading = document.querySelector(".loading");
window.addEventListener("load", function () {
  loading.style.display = "none";
  loading.parentElement.style.overflow = "auto";
});