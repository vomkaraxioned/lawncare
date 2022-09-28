/* Author: 

*/
/*global variables declared and initialize here*/
//variable for home
const feedbacks = document.querySelector(".feedbacks");
//variables for gallery modal
const galleryItems = document.querySelectorAll(".gallery .gallery-item");
//variables for form
let userName, email, subject, message;
const contactForm = document.querySelector(".form-section form[name=contact-form]");
const emailRe = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
    textRe = /^[a-zA-Z\s]+$/;
let valid;
//variables for navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector("header .nav-items");
menu.active = false;

/*=====form validation start here=====*/
function multiValidator(field, onlyText, isemail) {
    try {
        if (field.value.length == 0) {
            valid = false;
            throw "Please provide\t" + field.name;
        } else if (!isemail && (field.value.length > 20 || field.value.length < 2)) {
            valid = false;
            throw field.name + "\tshould be more than 2 letters and less than 20 letters ";
        } else if (onlyText && !textRe.test(field.value)) {
            valid = false;
            throw "only letters allowed";
        } else if (isemail && !emailRe.test(field.value)) {
            valid = false;
            throw "Please provide valid email";
        }

        field.nextSibling.style.display = "none";
    } catch (e) {
        field.nextSibling.innerHTML = e;
        field.nextSibling.style.display = "block";
    }
}

function removeSpace(field) {
    field.value = field.value.trim();
}

function validation() {
    valid = true;
    userName = document.querySelector("input[name=name]");
    email = document.querySelector("input[name=email]");
    subject = document.querySelector("input[name=subject]");
    message = document.querySelector("textarea");
    multiValidator(userName, true, false);
    multiValidator(email, false, true);
    multiValidator(subject, false, false);
    multiValidator(message, false, false);
    if (valid) {
        alert("We contact you soon" + "\t" + userName);
        contactForm.reset();
    }
}
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        validation();
    });
    for (i = 0; i < contactForm.length; i++) {
        contactForm[i].addEventListener("blur", (e) => {
        removeSpace(e.target);
        });
    }
}
/*=====form validation end here=====*/

/*=====slider start here=====*/
if (feedbacks) {
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
    let galleryModal, galleryCancel, galleryFigure, galleryImage;
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
    galleryModal.addEventListener("click", (e) => {
        if (e.target != galleryImage) {
            document.children[0].classList.remove("removeScroll");
            document.body.removeChild(galleryModal);
        }
    });
}
if (galleryItems) {
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
        document.children[0].classList.add("removeScroll");
    } else {
        menu.active = false;
        menu.classList.remove("menu-active");
        document.children[0].classList.remove("removeScroll");
    }
});
/*=====nav items ends  here=====*/