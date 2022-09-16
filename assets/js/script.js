/* Author: 

*/
/*global variables declared and initialize here*/
const slides = document.querySelector(".feedbacks");
let sliderControls = document.querySelectorAll(".btn-control");
let slidesLength = sliderControls.length;
let sliderLength = slides.children.length * innerWidth;
let i, newControlBtn, activeControl;
let scrollIterator = currentSliderPosition = 0;

/*=====slider start here=====*/
// adding event listener to control button

sliderControls.forEach((btn, i) => {
    btn.index = i;
    btn.addEventListener("click", () => {
        scrollIterator = btn.index;
    });
});
// code for slider
sliderControls[0].classList.add("control-active");

function sliderSliding() {
    sliderControls = document.querySelector(".controls");
    activeControl = document.querySelector(".control-active");
    if (innerWidth <= 768) {
        addSliderControls();
    }
    if (currentSliderPosition >= sliderLength) {
        currentSliderPosition = 0;
    }
    if (scrollIterator >= slidesLength) {
        scrollIterator = 0;
    }
    activeControl.classList.remove("control-active");
    sliderControls.children[scrollIterator].classList.add("control-active");
    slides.scrollLeft = currentSliderPosition;
    currentSliderPosition = scrollIterator * innerWidth;
    scrollIterator++;
}

// method to add buttons for small screen
function addSliderControls() {
    i = 0;
    sliderControls.innerHTML = "";
    while (i < slidesLength) {
        newControlBtn = document.createElement("button");
        newControlBtn.innerHTML = "a";
        newControlBtn.classList.add("btn-control");
        sliderControls.appendChild(newControlBtn);
        i++;
    }
}
setInterval(sliderSliding, 1500);
/*=====slider ends here=====*/