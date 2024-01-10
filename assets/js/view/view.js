import iconsError from "../../../assets/images/icon-error.svg";
import * as confi from "../confi.js";
export default class view {
  intervalId;
  cuntdown = document.querySelector("#cuntdown");

  _clearErrorMessage() {
    this._parentElementError.innerHTML = "";
    this._parentElementError.classList.remove("error-message--extend");
    this._email.classList.remove("invalid-email-id");
  }

  showMessageContainer() {
    this._signupContainer.classList.add("hidden");
    this._successMessageContainer.classList.remove("hidden");
    this._email.value = "";
    this.cuntdown.textContent = confi.MESSAGE_CLOSE_SEC;
    this._email.classList.remove("invalid-email-id");
  }

  hideMessageContainer() {
    this._signupContainer.classList.remove("hidden");
    this._successMessageContainer.classList.add("hidden");
    this._email.value = "";
    this.cuntdown.textContent = confi.MESSAGE_CLOSE_SEC;
    location.reload();
    this._email.classList.remove("invalid-email-id");
  }

  renderError(message = this._errorMessage) {
    const murkup = `
    <img class="error-icon" src="${iconsError}" alt="error icon">
    <p>${message}</p>`;
    this._clearErrorMessage();
    this._parentElementError.classList.add("error-message--extend");
    this._email.classList.add("invalid-email-id");
    this._email.focus();
    this._parentElementError.insertAdjacentHTML("afterbegin", murkup);
  }

  renderEmailAddress(emailID) {
    this._emailID.innerHTML = emailID;
  }

  startInterVal() {
    this.intervalId = setInterval(this.renderCountdown, 1000);
  }

  renderCountdown() {
    let countDownValue = +this.cuntdown.textContent;
    if (countDownValue > 0) {
      --countDownValue;
      this.cuntdown.textContent = countDownValue;
      console.log(countDownValue);
    } else {
      clearInterval(this.intervalId);
    }
  }
}
