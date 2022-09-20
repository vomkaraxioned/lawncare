/* Author: 

*/
/*global variables declared and initialize here*/

/*=====form validation start here=====*/
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
    if (valid) {
        alert("We contact you soon" + "\t" + userName);
        contactForm.reset();
    }
}
if (document.title == "Contact") {
    contactForm.addEventListener("submit", (e) => {
        console.log(contactForm[0])
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
}
/*=====slider ends here=====*/

/*=====gallery modal start here=====*/
function cancelBtnListener() {
    galleryCancel = document.querySelector(".gallery-cancel");
    galleryModal = document.querySelector(".gallery-active-item");
    galleryCancel.addEventListener("click", () => {
        document.children[0].classList.remove("removeScroll");
        document.body.removeChild(galleryModal);
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
        document.children[0].classList.add("removeScroll");
    } else {
        menu.active = false;
        menu.classList.remove("menu-active");
        document.children[0].classList.remove("removeScroll");
        navbar.style.display = "none";
    }
});
/*=====nav items ends  here=====*/