const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

const inputName = document.querySelector(".input-name");
const form = document.querySelector("form");
const validationTxt = document.querySelectorAll(".validation");
const inputEmail = document.querySelector(".input-email");
const inputLastName = document.querySelector(".input-last-name");
const inputPhone = document.querySelector(".input-phone");
const thanksMsg = document.querySelector(".thanks-msg-container");

let isValid = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (isValid == true) {
    form.remove();
    thanksMsg.classList.add("show");
  }
});

const validateInputs = () => {
  validationTxt[0].classList.add("hidden");
  inputName.classList.remove("invalid");

  validationTxt[1].classList.add("hidden");
  inputLastName.classList.remove("invalid");

  validationTxt[2].classList.add("hidden");
  inputEmail.classList.remove("invalid");

  validationTxt[3].classList.add("hidden");
  inputPhone.classList.remove("invalid");

  isValid = true;

  if (!inputName.value) {
    validationTxt[0].classList.remove("hidden");
    inputName.classList.add("invalid");
    isValid = false;
  }
  if (!inputLastName.value) {
    validationTxt[1].classList.remove("hidden");
    inputLastName.classList.add("invalid");
    isValid = false;
  }

  if (!isValidEmail(inputEmail.value)) {
    validationTxt[2].classList.remove("hidden");
    inputEmail.classList.add("invalid");
    isValid = false;
  }

  if (!isValidPhone(inputPhone.value)) {
    validationTxt[3].classList.remove("hidden");
    inputPhone.classList.add("invalid");
    isValid = false;
  }
};

inputName.addEventListener("input", () => {
  validateInputs();
});

inputEmail.addEventListener("input", () => {
  validateInputs();
});

inputLastName.addEventListener("input", () => {
  validateInputs();
});

inputPhone.addEventListener("input", () => {
  validateInputs();
});
