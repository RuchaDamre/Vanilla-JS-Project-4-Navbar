let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");

hamburger.addEventListener('click', function () {
  header.classList.toggle("showlink");
})

document.addEventListener("click", (evt) => {
  let targetEl = evt.target; // clicked element      
  do {
    if (targetEl == navbar) {
      // This is a click inside, does nothing, just return.
      return;
    }
    // Go up the DOM
    targetEl = targetEl.parentNode;
  } while (targetEl);
  // This is a click outside.      
  header.classList.remove("showlink");
});
