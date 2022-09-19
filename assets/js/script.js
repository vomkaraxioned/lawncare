/* Author: 

*/
/*global variables declared and initialize here*/

//variables for slider
const slides = document.querySelector(".feedbacks");
const sliderControlsBox = document.querySelector(".controls");
let sliderControls, slidesLength, sliderLength, i, newControlBtn, controlsNumber, activeControl, screenWidth, sliderCall, scrollIterator = currentSliderPosition = 0;
//variables for footer modal 
const footerModalControls = document.querySelectorAll("footer .service a");
const footerModal = document.querySelectorAll("footer .service .dropDown");
let activeFooterModal;
//variables for gallery modal
const galleryItemsHolder = document.querySelector(".gallery .gallery-items");
const galleryItems = document.querySelectorAll(".gallery .gallery-item");
let galleryModal, modal, galleryCancel, galleryFigure, galleryImage;
//variables for form
const contactForm = document.querySelector(".form-section form[name=contact-form");
const errorBox = document.querySelectorAll(".err");
let userName, email, subject, message, valid, emailRe = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
    textRe = /^[a-zA-Z\s]+$/;
//variables for navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector("header .nav-items");
menu.active = false;

/*=====footer modal end here=====*/

/*=====form validation start here=====*/
function validation() {
    valid = true;
    userName = document.forms["contact-form"]["name"].value;
    email = document.forms["contact-form"]["email"].value;
    subject = document.forms["contact-form"]["subject"].value;
    message = document.forms["contact-form"]["message"].value;
    try {
        if (userName > 15 || userName < 2) {
            valid = false;
            throw "name should be more than 2 letters and less than 15 letters";
        } else if (userName == "") {
            valid = false;
            throw "Please provide name";
        } else if (!textRe.test(userName)) {
            valid = false;
            throw "only letters allowed";
        } else {
            errorBox[0].style.display = "none";
        }
    } catch (e) {
        errorBox[0].innerHTML = e;
        errorBox[0].style.display = "block";
    }
    try {
        if (email == "") {
            valid = false;
            throw "Please provide email";
        } else if (!emailRe.test(email)) {
            valid = false;
            throw "Please provide valid email";
        } else {
            errorBox[1].style.display = "none";
        }
    } catch (e) {
        errorBox[1].innerHTML = e;
        errorBox[1].style.display = "block";
    }
    try {
        if (subject > 20) {
            valid = false;
            throw "subject should be less than 20 letters";
        } else if (subject == "") {
            valid = false;
            throw "Please provide subject";
        } else {
            errorBox[2].style.display = "none";
        }
    } catch (e) {
        errorBox[2].innerHTML = e;
        errorBox[2].style.display = "block";
    }
    try {
        if (message > 50) {
            valid = false;
            throw "message should less than 50 letters";
        } else if (message == "") {
            valid = false;
            throw "Please provide message";
        } else {
            errorBox[3].style.display = "none";
        }
    } catch (e) {
        errorBox[3].innerHTML = e;
        errorBox[3].style.display = "block";
    }
    if (valid) {
        alert("We contact you soon" + "\t" + userName);
        contactForm.reset();
    }
}
if (document.title == "Contact") {
    clearInterval(sliderCall);
    contactForm.addEventListener("submit", (e) => {
        validation();
        e.preventDefault();
    });
}
/*=====form validation end here=====*/

/*=====slider start here=====*/
// adding event listener to control button
function addListener() {
    sliderControls = document.querySelectorAll(".btn-control");
    slidesLength = sliderControls.length;
    sliderLength = slides.children.length * innerWidth;
    sliderControls.forEach((btn, i) => {
        btn.index = i;
        btn.addEventListener("click", () => {
            scrollIterator = btn.index;
            clearInterval(sliderCall);
            sliderSliding();
        });
    });
    sliderControls[scrollIterator].classList.add("control-active");
}

function checkerToAddBtn() {
    screenWidth = innerWidth;
    if (screenWidth <= 768) {
        controlsNumber = slides.children.length;
        addSliderControls();
    } else {
        controlsNumber = 5;
        addSliderControls();
    }
}
// code for slider

function sliderSliding() {
    activeControl = document.querySelector(".control-active");
    if (innerWidth != screenWidth) {
        checkerToAddBtn();
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
    sliderControlsBox.innerHTML = "";
    while (i < controlsNumber) {
        newControlBtn = document.createElement("button");
        newControlBtn.innerHTML = "a";
        newControlBtn.classList.add("btn-control");
        sliderControlsBox.appendChild(newControlBtn);
        i++;
    }
    addListener();
}
if (document.title == "Home") {
    checkerToAddBtn();
    addListener();
    sliderCall = setInterval(sliderSliding, 2000);
}
/*=====slider ends here=====*/

/*=====footer modal start here=====*/
footerModalControls.forEach((m, i) => {
    m.addEventListener("click", (e) => {
        if (e.target == m) {
            if (activeFooterModal != undefined) {
                footerModal[activeFooterModal].style.display = "none";
                document.body.addEventListener("click", function footerModalOff(e) {
                    if (e.target != m) {
                        footerModal[activeFooterModal].style.display = "none";
                        document.body.removeEventListener("click", footerModalOff);
                    }
                });
            }
            footerModal[i].style.display = "flex";
            activeFooterModal = i;
        } else {
            footerModal[activeFooterModal].style.display = "none";
        }
    });
});
/*=====footer modal end here=====*/

/*=====gallery modal start here=====*/
function cancelBtnListener() {
    galleryCancel = document.querySelector(".gallery-cancel");
    galleryModal = document.querySelector(".gallery-active-item");
    galleryCancel.addEventListener("click", () => {
        galleryItemsHolder.removeChild(galleryModal);
    });
}

function galleryPopUp(item) {
    galleryModal = document.createElement("div");
    galleryFigure = document.createElement("figure");
    galleryImage = document.createElement("img");
    galleryImage.src = item.src;
    galleryImage.alt = item.alt;
    galleryCancel = document.createElement("span");
    galleryModal.classList.add("gallery-active-item");
    galleryCancel.classList.add("gallery-cancel");
    galleryFigure.appendChild(galleryImage);
    galleryFigure.appendChild(galleryCancel);
    galleryModal.appendChild(galleryFigure);
    galleryItemsHolder.appendChild(galleryModal);
    cancelBtnListener();
}
if (document.title == "Gallery") {
    galleryItems.forEach((ele) => {
        ele.addEventListener("click", () => {
            image = ele.children[0].children[0];
            galleryPopUp(image);
        });
    });
}
/*=====gallery modal ends here=====*/

/*=====nav items start  here=====*/
menu.addEventListener("click", () => {
    if (!menu.active) {
        menu.active = true;
        menu.classList.add("menu-active");
        navbar.style.display = "flex";
    } else {
        menu.active = false;
        menu.classList.remove("menu-active");
        navbar.style.display = "none";
    }
});
/*=====nav items ends  here=====*/