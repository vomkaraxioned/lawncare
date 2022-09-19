/* Author: 

*/
/*global variables declared and initialize here*/
<<<<<<< HEAD

//variables for slider
const slides = document.querySelector(".feedbacks");
const sliderControlsBox = document.querySelector(".controls");
let sliderControls, slidesLength, sliderLength, i, newControlBtn, controlsNumber, activeControl, screenWidth, sliderCall, scrollIterator = 0,
    currentSliderPosition = 0;
//variables for footer modal 
const footerModalControls = document.querySelectorAll("footer .service a");
const footerModal = document.querySelectorAll("footer .service .dropDown");
let activeFooterModal;
//variables for gallery modal
const galleryItemsHolder = document.querySelector(".gallery .gallery-items");
=======
//variables for gallery modal
>>>>>>> dev
const galleryItems = document.querySelectorAll(".gallery .gallery-item");
let galleryModal, modal, galleryCancel, galleryFigure, galleryImage;
//variables for form
let userName, email, subject, message;
const contactForm = document.querySelector(".form-section form[name=contact-form");
const errorBox = document.querySelectorAll(".err");
<<<<<<< HEAD
let userName, email, subject, message, valid, emailRe = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
    textRe = /^[a-zA-Z\s]+$/;
=======
const emailRe = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
    textRe = /^[a-zA-Z\s]+$/;
let valid;
>>>>>>> dev
//variables for navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector("header .nav-items");
menu.active = false;

/*=====footer modal end here=====*/

/*=====form validation start here=====*/
<<<<<<< HEAD
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
=======
function multiValidator(field, value, index, onlyText, isemail) {
    try {
        if (!onlyText || !isemail) {
            if (value.length == 0) {
                valid = false;
                throw "Please provide\t" + field;
            }
        } else if (onlyText) {
            if (value > 20 || value < 2) {
                valid = false;
                throw field + "\tshould be more than 2 letters and less than 20 letters ";
            }
        } else if (onlyText) {
            if (!textRe.test(value)) {
                valid = false;
                throw "only letters allowed";
            }
        } else if (isemail) {
            if (!emailRe.test(email)) {
                valid = false;
                throw "Please provide valid email";
            }
        }
        errorBox[index].style.display = "none";
    } catch (e) {
        errorBox[index].innerHTML = e;
        errorBox[index].style.display = "block";
    }
}

function removeSpace(field) {
    field.value = field.value.trim();
}

function validation() {
    valid = true;
    userName = document.forms["contact-form"]["name"].value;
    email = document.forms["contact-form"]["email"].value;
    subject = document.forms["contact-form"]["subject"].value;
    message = document.forms["contact-form"]["message"].value;
    multiValidator("username", userName, 0, true, false);
    multiValidator("email", email, 1, false, true);
    multiValidator("subject", subject, 2, false, false);
    multiValidator("message", message, 3, false, false);
>>>>>>> dev
    if (valid) {
        alert("We contact you soon" + "\t" + userName);
        contactForm.reset();
    }
}
if (document.title == "Contact") {
<<<<<<< HEAD
    clearInterval(sliderCall);
    contactForm.addEventListener("submit", (e) => {
=======
    contactForm.addEventListener("submit", (e) => {
        console.log(contactForm[0])
>>>>>>> dev
        validation();
        e.preventDefault();
    });
    contactForm[0].addEventListener("blur", (e) => {
        removeSpace(e.target);
        e.preventDefault();
    });
    contactForm[1].addEventListener("blur", (e) => {
        removeSpace(e.target);
        e.preventDefault();
    });
    contactForm[2].addEventListener("blur", (e) => {
        removeSpace(e.target);
        e.preventDefault();
    });
    contactForm[3].addEventListener("blur", (e) => {
        removeSpace(e.target);
        e.preventDefault();
    });
}
/*=====form validation end here=====*/

/*=====slider start here=====*/
if (document.title == "Home") {
    $(".feedbacks").slick({
        dots: true,
        infinite: false,
        speed: 300,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
<<<<<<< HEAD
    console.log(sliderControls[scrollIterator]);
    sliderControls[scrollIterator].classList.add("control-active");
}

function checkerToAddBtn() {
    screenWidth = innerWidth;
    if (screenWidth <= 768) {
        controlsNumber = slides.children.length;
    } else {
        controlsNumber = 5;
    }
    addSliderControls();
}
// code for slider

function sliderSliding() {
    if (innerWidth != screenWidth) {
        checkerToAddBtn();
    }
    if (currentSliderPosition >= sliderLength) {
        currentSliderPosition = 0;
    }
    if (scrollIterator >= slidesLength) {
        scrollIterator = 0;
    }
    activeControl = document.querySelector(".control-active");
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
    // checkerToAddBtn();
    // addListener();
    sliderCall = setInterval(sliderSliding, 2000);
}
/*=====slider ends here=====*/

/*=====footer modal start here=====*/
footerModalControls.forEach((m, i) => {
    m.addEventListener("click", (e) => {
        if (e.target == m) {
            if (activeFooterModal != undefined) {
                footerModal[activeFooterModal].style.display = "none";
            }
            footerModal[i].style.display = "flex";
            activeFooterModal = i;
        } else {
            footerModal[activeFooterModal].style.display = "none";
        }
    });
});
/*=====footer modal end here=====*/

=======
}
/*=====slider ends here=====*/

>>>>>>> dev
/*=====gallery modal start here=====*/
function cancelBtnListener() {
    galleryCancel = document.querySelector(".gallery-cancel");
    galleryModal = document.querySelector(".gallery-active-item");
    galleryCancel.addEventListener("click", () => {
<<<<<<< HEAD
        galleryItemsHolder.removeChild(galleryModal);
=======
        document.children[0].classList.remove("removeScroll");
        document.body.removeChild(galleryModal);
>>>>>>> dev
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
    document.body.appendChild(galleryModal);
    document.children[0].classList.add("removeScroll");
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
<<<<<<< HEAD
    } else {
        menu.active = false;
        menu.classList.remove("menu-active");
=======
        document.children[0].classList.add("removeScroll");
    } else {
        menu.active = false;
        menu.classList.remove("menu-active");
        document.children[0].classList.remove("removeScroll");
>>>>>>> dev
        navbar.style.display = "none";
    }
});
/*=====nav items ends  here=====*/