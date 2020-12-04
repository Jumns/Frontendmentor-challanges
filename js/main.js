"use strict";

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const nav = document.getElementById("nav");
const mOverley = document.getElementById("backDrop");
const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    callErrorMessage(email, "Email can't be blank");
  } else if (!isEmail(emailValue)) {
    callErrorMessage(email, "please insert a valid email");
  } else {
    setSuccessMessage(email);
  }
}

function callErrorMessage(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(" small");

  // add error message
  small.innerText = message;

  formControl.className = "form-control error danger";
  const inputText = (input.style.color = "hsl(12, 88%, 59%)");
}

function setSuccessMessage(email) {
  const formControl = email.parentElement;

  formControl.className = "form-control success";
  const inputText = (input.style.color = "initial");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase()
  );
}

openBtn.addEventListener("click", (e) => {
  nav.classList.toggle("hide-mobile");
  closeBtn.style.display = "initial";
  openBtn.style.display = "none";
  mOverley.style.display = "block";
  e.preventDefault();
});

closeBtn.addEventListener("click", (e) => {
  nav.classList.add("hide-mobile");
  closeBtn.style.display = "none";
  openBtn.style.display = "initial";
  mOverley.style.display = "none";
  e.preventDefault();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  autoplay: true,
  autoplayTimeout: 4000,
  // animateOut: "slideOutDown",
  // animateIn: "flipInX",
  // items: 1,
  // stagePadding: 10,
  smartSpeed: 650,
  responsive: {
    0: {
      items: 1,
    },

    900: {
      items: 2,
    },

    1100: {
      items: 3,
    },
  },
});
