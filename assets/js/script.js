/* Author: 

*/
/*global variables declared and initialize here*/

//variables for slider
const slides = document.querySelector(".feedbacks");
let sliderControls, slidesLength, sliderLength, i, newControlBtn, activeControl,screenWidth,scrollIterator = currentSliderPosition = 0;
//variables for footer modal 
const footerModalControls = document.querySelectorAll("footer .service a");
const footerModal = document.querySelectorAll("footer .service .dropDown");
let activeFooterModal;
//variables for gallery modal
//variables for form
const contactForm = document.querySelector(".form-section form");
//variables for navbar

/*=====slider start here=====*/
// adding event listener to control button
function addListener() {
    screenWidth = innerWidth;
    sliderControls = document.querySelectorAll(".btn-control");
    slidesLength = sliderControls.length;
    sliderLength = slides.children.length * innerWidth;
    sliderControls.forEach((btn, i) => {
        btn.index = i;
        btn.addEventListener("click", () => {
            scrollIterator = btn.index;
            sliderSliding();
        });
    });
    if(screenWidth <= 768) {
        addSliderControls();
    }
}
// code for slider

function sliderSliding() {
    activeControl = document.querySelector(".control-active");
    if (innerWidth != screenWidth) {
        addListener();
    }
    if (currentSliderPosition >= sliderLength) {
        currentSliderPosition = 0;
    }
    if (scrollIterator >= slidesLength) {
        scrollIterator = 0;
    }
    activeControl.classList.remove("control-active");
    sliderControls[scrollIterator].classList.add("control-active");
    slides.scrollLeft = currentSliderPosition;
    currentSliderPosition = scrollIterator * innerWidth;
    scrollIterator++;
}

// method to add buttons for small screen
function addSliderControls() {
    i = 0;
    sliderControls = document.querySelector(".controls");
    sliderControls.innerHTML = "";
    while (i < slides.children.length) {
        newControlBtn = document.createElement("button");
        newControlBtn.innerHTML = "a";
        newControlBtn.classList.add("btn-control");
        sliderControls.appendChild(newControlBtn);
        i++;
    }
    addListener();
}
addListener();
sliderControls[0].classList.add("control-active");
setInterval(sliderSliding, 2000);
/*=====slider ends here=====*/

/*=====footer modal start here=====*/
footerModalControls.forEach((m,i)=>{
    m.addEventListener("click",(e)=>{
        if(e.target == m){
            if(activeFooterModal != undefined){
                footerModal[activeFooterModal].style.display = "none";
            }
            footerModal[i].style.display = "flex";
            activeFooterModal = i;
        }else {
            footerModal[activeFooterModal].style.display = "none";
        }
    });
});
/*=====footer modal end here=====*/

/*=====form validation start here=====*/
contactForm.addEventListener("submit",(e)=>{
    alert("ji");
    e.preventDefault();
});
/*=====form validation end here=====*/