import view from "./view.js";
import * as confi from "../confi.js";

class SignupView extends view {
  _parentElementSignup = document.querySelector(".signup");
  _parentElementError = document.querySelector(".error-message");
  _errorMessage = "Please enter a valid email address.";

  _signupContainer = document.querySelector(".signup-container");
  _successMessageContainer = document.querySelector(
    ".success-message-container"
  );

  _emailID = document.querySelector(".email-id");
  _email = document.querySelector("#email");
  _dismissBtn = document.querySelector(".dismiss__btn");

  constructor() {
    super();
  }

  addHandlerSignup(handler) {
    this._parentElementSignup.addEventListener("submit", function (event) {
      event.preventDefault();
      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray);
      handler(data);
    });
  }

  addHandlerDismiss(handler) {
    this._dismissBtn.addEventListener("click", function (event) {
      event.preventDefault();
      handler();
    });
  }
}

export default new SignupView();
