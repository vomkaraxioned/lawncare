/* Author: 

*/
/*global variables declared and initialize here*/
//variables for gallery modal
const galleryItems = document.querySelectorAll(".gallery .gallery-item");
let galleryModal, modal, galleryCancel, galleryFigure, galleryImage;
//variables for form
let userName, email, subject, message;
const contactForm = document.querySelector(".form-section form[name=contact-form]");
const errorBox = document.querySelectorAll(".err");
const emailRe = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
    textRe = /^[a-zA-Z\s]+$/;
let valid;
//variables for navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector("header .nav-items");
menu.active = false;

/*=====footer modal end here=====*/

/*=====form validation start here=====*/
function multiValidator(field, value, index, onlyText, isemail) {
    try {
        if (value.length == 0) {
            valid = false;
            throw "Please provide\t" + field;
        } else if (!email && (value.length > 20 || value.length < 2)) {
            valid = false;
            throw field + "\tshould be more than 2 letters and less than 20 letters ";
        } else if (onlyText && !textRe.test(value)) {
            valid = false;
            throw "only letters allowed";
        } else if (isemail && !emailRe.test(email)) {
            valid = false;
            throw "Please provide valid email";
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
    if (valid) {
        alert("We contact you soon" + "\t" + userName);
        contactForm.reset();
    }
}
if (document.title == "Contact") {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        validation();
    });
    contactForm[0].addEventListener("blur", (e) => {
        removeSpace(e.target);
    });
    contactForm[1].addEventListener("blur", (e) => {
        removeSpace(e.target);
    });
    contactForm[2].addEventListener("blur", (e) => {
        removeSpace(e.target);
    });
    contactForm[3].addEventListener("blur", (e) => {
        removeSpace(e.target);
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
}
/*=====slider ends here=====*/

/*=====gallery modal start here=====*/

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
    galleryImage = document.querySelector(".gallery-active-item figure img");
    galleryModal = document.querySelector(".gallery-active-item");
    galleryModal.addEventListener("click", (e) => {
        if (e.target != galleryImage) {
            document.children[0].classList.remove("removeScroll");
            document.body.removeChild(galleryModal);
        }
    });
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
        // document.children[0].classList.add("removeScroll");
    } else {
        menu.active = false;
        menu.classList.remove("menu-active");
        document.children[0].classList.remove("removeScroll");
        navbar.style.display = "none";
    }
});
/*=====nav items ends  here=====*/